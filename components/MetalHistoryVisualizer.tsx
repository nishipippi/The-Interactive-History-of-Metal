import React, { useState, useMemo } from 'react';
import { metalHistoryData } from '../data/metalHistoryData';
import { GenreInfo } from '../types';

const CARD_WIDTH = 256;
const CARD_HEIGHT = 268;
const COLUMN_GAP = 64;
const ROW_GAP = 32;
const FOCUSED_GAP = ROW_GAP;
const UNFOCUSED_GAP = ROW_GAP * 3;

type GenreCardProps = {
  genre: GenreInfo;
  isRelated: boolean;
  isActive: boolean;
  hasActiveItem: boolean;
};

const typeColors = {
  origin: 'border-yellow-400',
  transitional: 'border-green-400',
  mainstream: 'border-red-500',
  'counter-culture': 'border-blue-500',
  'sub-genre': 'border-purple-500',
  fusion: 'border-orange-500',
};

const GenreCard: React.FC<GenreCardProps> = ({ genre, isRelated, isActive, hasActiveItem }) => {
  const borderColor = typeColors[genre.type] || 'border-gray-600';
  const isDimmed = hasActiveItem && !isRelated;

  return (
    <div
      className={`bg-slate-900/80 backdrop-blur-sm p-4 rounded-lg border-2 w-64 shadow-lg 
        transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl hover:shadow-slate-500/20
        ${borderColor}
        ${isActive ? 'shadow-sky-500/50 shadow-2xl ring-2 ring-sky-500 z-20' : 'z-10'}
        ${isDimmed ? 'opacity-30 blur-sm' : 'opacity-100 blur-0'}`}
        style={{ height: `${CARD_HEIGHT}px`}}
    >
      <h3 className="text-xl font-bold text-slate-100">{genre.name}</h3>
      <p className="text-sm text-slate-400 mb-2">{genre.era}</p>
      <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider">{genre.type.replace('-', ' ')}</p>
      <p className="text-sm text-slate-300 mb-4 h-20 overflow-y-auto custom-scrollbar">{genre.description}</p>
      <div className="border-t border-slate-700 pt-2">
        <p className="text-xs text-slate-400 font-semibold">代表バンド:</p>
        <p className="text-sm text-slate-300 leading-tight">
          {genre.bands.map((band, index) => (
            <React.Fragment key={band.name}>
              {band.url ? (
                <a
                  href={band.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {band.name}
                </a>
              ) : (
                <span>{band.name}</span>
              )}
              {index < genre.bands.length - 1 ? ', ' : ''}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

interface InfluenceLinesProps {
    activeGenreId: string | null;
    layout: { positions: Map<string, { x: number; y: number }>, width: number, height: number };
}

const InfluenceLines: React.FC<InfluenceLinesProps> = ({ activeGenreId, layout }) => {
  const lines = useMemo(() => {
    if (layout.positions.size === 0) return [];
    
    const newLines: {id: string, d: string, source: string, target: string}[] = [];
    metalHistoryData.forEach(genre => {
      genre.influences.forEach(influenceId => {
        const sourcePos = layout.positions.get(influenceId);
        const targetPos = layout.positions.get(genre.id);

        if (sourcePos && targetPos) {
          const startX = sourcePos.x + CARD_WIDTH;
          const startY = sourcePos.y + CARD_HEIGHT / 2;
          const endX = targetPos.x;
          const endY = targetPos.y + CARD_HEIGHT / 2;
          
          const controlX1 = startX + (endX - startX) * 0.5;
          const controlY1 = startY;
          const controlX2 = startX + (endX - startX) * 0.5;
          const controlY2 = endY;

          newLines.push({
            id: `${influenceId}-${genre.id}`,
            d: `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`,
            source: influenceId,
            target: genre.id,
          });
        }
      });
    });
    return newLines;
  }, [layout]);

  return (
    <svg className="absolute top-0 left-0 pointer-events-none" style={{ width: layout.width, height: layout.height, zIndex: 0 }}>
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" className="fill-current text-slate-500" />
        </marker>
        <marker id="arrowhead-influences" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" className="fill-current text-sky-400" />
        </marker>
         <marker id="arrowhead-influenced" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" className="fill-current text-teal-400" />
        </marker>
        <style>
          {`
            @keyframes flow {
              to {
                stroke-dashoffset: -1000;
              }
            }
            .line-flow {
              stroke-dasharray: 7, 3;
              stroke-dashoffset: 0;
              animation: flow 40s linear infinite;
            }
          `}
        </style>
      </defs>
      <g>
        {lines.map(line => {
          const isInfluenceOfActive = activeGenreId === line.target; // Arrow points TO active card
          const isInfluencedByActive = activeGenreId === line.source; // Arrow points FROM active card

          let lineClass = 'stroke-slate-700 opacity-20';
          let marker = 'url(#arrowhead)';
          let strokeWidth = 1.5;

          if (!activeGenreId) {
            lineClass = 'stroke-slate-600 opacity-40';
          } else if (isInfluenceOfActive) {
            lineClass = 'stroke-sky-400 line-flow';
            marker = 'url(#arrowhead-influences)';
            strokeWidth = 2.5;
          } else if (isInfluencedByActive) {
            lineClass = 'stroke-teal-400 line-flow';
            marker = 'url(#arrowhead-influenced)';
            strokeWidth = 2.5;
          }

          return (
            <path
              key={line.id}
              d={line.d}
              strokeWidth={strokeWidth}
              markerEnd={marker}
              className={`transition-all duration-700 ease-in-out fill-none ${lineClass}`}
            />
          );
        })}
      </g>
    </svg>
  );
};

const MetalHistoryVisualizer: React.FC = () => {
  const [activeGenreId, setActiveGenreId] = useState<string | null>(null);

  const relatedGenreIds = useMemo(() => {
    if (!activeGenreId) return new Set<string>();
    const related = new Set<string>([activeGenreId]);
    const genre = metalHistoryData.find(g => g.id === activeGenreId);
    if (genre) {
      genre.influences.forEach(id => related.add(id));
    }
    metalHistoryData.forEach(g => {
      if (g.influences.includes(activeGenreId)) {
        related.add(g.id);
      }
    });
    return related;
  }, [activeGenreId]);

  const baseLayout = useMemo(() => {
    const positions = new Map<string, { x: number; y: number }>();
    let totalWidth = 0;
    let totalHeight = 0;
    const columns = metalHistoryData.reduce((acc, genre) => {
        (acc[genre.column] = acc[genre.column] || []).push(genre);
        return acc;
    }, [] as GenreInfo[][]);

    columns.forEach((genres, colIndex) => {
        genres.sort((a,b) => a.era.localeCompare(b.era) || a.name.localeCompare(b.name));
        const x = colIndex * (CARD_WIDTH + COLUMN_GAP);
        let currentY = 0;
        genres.forEach((genre) => {
            positions.set(genre.id, { x, y: currentY });
            currentY += CARD_HEIGHT + ROW_GAP;
        });
        totalHeight = Math.max(totalHeight, currentY);
        totalWidth = Math.max(totalWidth, x + CARD_WIDTH);
    });
    return { positions, width: totalWidth, height: totalHeight, columns };
  }, []);

  const layout = useMemo(() => {
    if (!activeGenreId) {
      return baseLayout;
    }

    const newPositions = new Map<string, { x: number; y: number }>();
    const mainAnchorGenre = metalHistoryData.find(g => g.id === activeGenreId);
    if (!mainAnchorGenre) return baseLayout;

    const mainAnchorPos = baseLayout.positions.get(activeGenreId);
    if (!mainAnchorPos) return baseLayout;

    baseLayout.columns.forEach((genresInCol, colIndex) => {
      const x = colIndex * (CARD_WIDTH + COLUMN_GAP);
      
      const relatedInCol = genresInCol.filter(g => relatedGenreIds.has(g.id))
                                     .sort((a, b) => (baseLayout.positions.get(a.id)?.y ?? 0) - (baseLayout.positions.get(b.id)?.y ?? 0));
      const unrelatedInCol = genresInCol.filter(g => !relatedGenreIds.has(g.id))
                                       .sort((a, b) => (baseLayout.positions.get(a.id)?.y ?? 0) - (baseLayout.positions.get(b.id)?.y ?? 0));

      let lastRelatedY = -UNFOCUSED_GAP + ROW_GAP; 

      if (relatedInCol.length > 0) {
        let localAnchor: GenreInfo;
        
        if (colIndex === mainAnchorGenre.column) {
            localAnchor = mainAnchorGenre;
        } else {
            localAnchor = relatedInCol.reduce((closest, current) => {
                const closestYDiff = Math.abs((baseLayout.positions.get(closest.id)?.y ?? 0) - mainAnchorPos.y);
                const currentYDiff = Math.abs((baseLayout.positions.get(current.id)?.y ?? 0) - mainAnchorPos.y);
                return currentYDiff < closestYDiff ? current : closest;
            });
        }
        
        const anchorTargetY = mainAnchorPos.y;
        const localAnchorIndex = relatedInCol.findIndex(g => g.id === localAnchor.id);

        for (let i = 0; i < relatedInCol.length; i++) {
          const genreToPosition = relatedInCol[i];
          const y = anchorTargetY + (i - localAnchorIndex) * (CARD_HEIGHT + FOCUSED_GAP);
          newPositions.set(genreToPosition.id, { x, y });
        }
        
        const yPositions = relatedInCol.map(g => newPositions.get(g.id)!.y);
        lastRelatedY = Math.max(...yPositions);
      }
      
      let currentY = lastRelatedY + CARD_HEIGHT + UNFOCUSED_GAP;

      unrelatedInCol.forEach(genre => {
        newPositions.set(genre.id, { x, y: currentY });
        currentY += CARD_HEIGHT + ROW_GAP;
      });
    });

    let minY = Infinity;
    for (const pos of newPositions.values()) {
        minY = Math.min(minY, pos.y);
    }
    
    const yOffset = minY < 0 ? -minY : 0;
    const finalPositions = new Map<string, { x: number; y: number }>();
    let maxY = -Infinity;

    for (const [id, pos] of newPositions.entries()) {
        const newY = pos.y + yOffset;
        finalPositions.set(id, { x: pos.x, y: newY });
        maxY = Math.max(maxY, newY);
    }
    
    const finalHeight = maxY + CARD_HEIGHT + ROW_GAP;

    return { positions: finalPositions, width: baseLayout.width, height: finalHeight, columns: baseLayout.columns };
  }, [activeGenreId, relatedGenreIds, baseLayout]);


  const handleCardClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setActiveGenreId(currentId => currentId === id ? null : id);
  };

  const handleBackgroundClick = () => {
    setActiveGenreId(null);
  };

  const decadeTitles = ["1960年代後半", "1970年代", "1980年代", "1990年代", "2000年代", "2010年代以降"];

  return (
    <div className="flex justify-center w-full">
      <style>
        {`
            .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: #475569; border-radius: 10px; }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #64748b; }
        `}
      </style>
      <div className="overflow-auto p-4 md:p-8 custom-scrollbar min-h-[80vh] w-full">
        <div className="relative" onClick={handleBackgroundClick} style={{ width: layout.width, height: layout.height, paddingBottom: '2rem' }}>
            {decadeTitles.map((title, index) => {
                const x = index * (CARD_WIDTH + COLUMN_GAP) + CARD_WIDTH / 2;
                return (
                    <h2 key={title} className="text-2xl font-bold text-slate-400 absolute top-0 text-center w-64 -translate-x-1/2" style={{ left: x, transform: 'translateY(-100%)' }}>
                        {title}
                    </h2>
                )
            })}
          <div className="pt-8">
            {metalHistoryData.map(genre => {
              const pos = layout.positions.get(genre.id);
              if (!pos) return null;
              
              const isRelated = !activeGenreId || relatedGenreIds.has(genre.id);
              
              return (
                <div
                  key={genre.id}
                  className="absolute transition-[transform] duration-700 ease-in-out cursor-pointer hover:z-30"
                  style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
                  onClick={(e) => handleCardClick(e, genre.id)}
                >
                  <GenreCard
                    genre={genre}
                    isActive={activeGenreId === genre.id}
                    isRelated={isRelated}
                    hasActiveItem={activeGenreId !== null}
                  />
                </div>
              );
            })}
            <InfluenceLines activeGenreId={activeGenreId} layout={layout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetalHistoryVisualizer;