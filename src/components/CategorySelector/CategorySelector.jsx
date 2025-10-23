import './CategorySelector.css';
import { CATEGORIES, CATEGORY_LABEL, CATEGORY_INFO } from '../../data/adviceData'

const CategorySelector = ({ selectedCategory, onCategoryChange }) => {
    return (
        <div className='category-selector'>
            <h3 className="category-title">Choose your Category</h3>
            <div className="category-grid">
                {Object.values(CATEGORIES).map((category) => (
                    <button
                        key={category}
                        className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                        aria-label={`Select ${CATEGORY_LABEL[category]} category`}
                        onClick={() => onCategoryChange(category)}
                    >
                        <span className="category-icon">
                            {CATEGORY_INFO[category].icon}
                        </span>
                        <span className="category-label">
                            {CATEGORY_LABEL[category]}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CategorySelector;