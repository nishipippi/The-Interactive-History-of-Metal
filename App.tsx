import React from 'react';
import MetalHistoryVisualizer from './components/MetalHistoryVisualizer';

const LegendItem: React.FC<{ colorClass: string; label: string; description: string }> = ({ colorClass, label, description }) => (
  <div className="flex items-center space-x-2">
    <div className={`w-4 h-4 rounded-full flex-shrink-0 ${colorClass}`}></div>
    <p className="text-sm">
      <span className="font-bold text-slate-200">{label}:</span>
      <span className="text-slate-400 ml-1">{description}</span>
    </p>
  </div>
);

const App: React.FC = () => {
  return (
    <div 
      className="min-h-screen bg-slate-950 text-slate-300 font-sans"
      style={{
        backgroundImage: `radial-gradient(circle at top right, rgba(120, 50, 50, 0.15), transparent 40%),
                         radial-gradient(circle at bottom left, rgba(50, 50, 120, 0.15), transparent 40%)`
      }}
    >
      <header className="text-center py-8 md:py-12 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-100 tracking-tighter" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.2)' }}>
          メタルジャンルの系統樹
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
          ヘヴィメタルの歴史をインタラクティブに探る。ジャンルをクリックすると、その影響関係が表示されます。
        </p>

        <div className="mt-8 max-w-4xl mx-auto bg-slate-900/50 p-4 rounded-lg border border-slate-700/50 flex flex-col md:flex-row gap-6 justify-center">
          <div className="flex-1">
            <h3 className="font-bold text-slate-200 mb-2 text-center md:text-left">ジャンルの種類 (枠線の色)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              <LegendItem colorClass="border-2 border-yellow-400" label="源流" description="他ジャンルの元となったジャンル" />
              <LegendItem colorClass="border-2 border-green-400" label="過渡期" description="複数の要素を持つジャンル" />
              <LegendItem colorClass="border-2 border-red-500" label="メインストリーム" description="時代を象徴する商業的な成功" />
              <LegendItem colorClass="border-2 border-blue-500" label="カウンター" description="主流への反発から生まれた文化" />
              <LegendItem colorClass="border-2 border-purple-500" label="サブジャンル" description="既存ジャンルからの多様な派生" />
              <LegendItem colorClass="border-2 border-orange-500" label="フュージョン" description="複数ジャンルの融合で誕生" />
            </div>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-slate-700/50"></div>
          <div className="flex-1">
            <h3 className="font-bold text-slate-200 mb-2 text-center md:text-left">影響関係 (矢印の色)</h3>
            <div className="flex flex-col gap-2">
              <LegendItem colorClass="bg-sky-400" label="影響を受けた" description="選択したジャンルへの影響元" />
              <LegendItem colorClass="bg-teal-400" label="影響を与えた" description="選択したジャンルからの影響先" />
            </div>
          </div>
        </div>

      </header>
      <main>
        <MetalHistoryVisualizer />
      </main>
      <footer className="text-center py-8 px-4 text-sm text-slate-500">
        <div className="max-w-4xl mx-auto border-t border-slate-700/50 pt-6">
            <h4 className="font-semibold text-slate-400 mb-2">参考動画</h4>
            <p className="mb-2">
                本サイトの作成にあたり、以下の動画を参考にさせていただきました。
            </p>
            <div className="flex flex-col items-center space-y-1">
              <p>
                  <a href="http://www.youtube.com/watch?v=PbRfv1uQ7jY" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-400 transition-colors">
                      「ヘヴィメタル・進化の歴史【メインストリームの変遷】#1」
                  </a>
                  <span className="ml-2 text-slate-600">/ CORE TUBE 【メタル・ヘヴィミュージック紹介&解説チャンネル】</span>
              </p>
              <p>
                  <a href="http://www.youtube.com/watch?v=WbQ2_7Vu9C4" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-400 transition-colors">
                      「ヘヴィメタル・進化の歴史【メインストリームの変遷】#2」
                  </a>
                  <span className="ml-2 text-slate-600">/ CORE TUBE 【メタル・ヘヴィミュージック紹介&解説チャンネル】</span>
              </p>
            </div>
            <p className="mt-8">A Visual Journey Through Metal's History</p>
        </div>
      </footer>
    </div>
  );
};

export default App;