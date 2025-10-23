import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import CategorySelector from './components/CategorySelector/CategorySelector.jsx';
import SeriousnessSlider from './components/SeriousnessSlider/SeriousnessSlider.jsx';
import AdviceCard from './components/AdviceCard/AdviceCard.jsx';
import { useAdviceGenerator } from './hooks/useAdviceGenerator.js'

function App() {

  const { currentAdvice, selectedCategory,
    seriousnessLevel, isGenerating, setSelectedCategory,
    setSeriousnessLevel, generateAdvice, resetAdvice
  } = useAdviceGenerator();

  return (
    <div className="app">
      <Header />

      <CategorySelector
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <SeriousnessSlider
        seriousnessLevel={seriousnessLevel}
        onSeriousnessChange={setSeriousnessLevel}
      />

      <AdviceCard
        advice={currentAdvice}
        isGenerating={isGenerating}
        onGenerateAdvice={generateAdvice}
        onReset={resetAdvice}
      />

      <Footer />
    </div>
  )
}

export default App;