import { SERIOUSNESS_LEVELS, SERIOUSNESS_LABEL } from '../../data/adviceData.js';
import './SeriousnessSlider.css';

const SeriousnessSlider = ({ seriousnessLevel, onSeriousnessChange }) => {

    const handleSliderChange = (event) => {
        onSeriousnessChange(parseInt(event.target.value));
    };

    const getSliderColor = (level) => {
        const colors = {
            [SERIOUSNESS_LEVELS.MILD]: '#10b981',
            [SERIOUSNESS_LEVELS.MODERATE]: '#f59e0b',
            [SERIOUSNESS_LEVELS.SERVE]: '#ef4444',
            [SERIOUSNESS_LEVELS.UNHINGED]: '#8b5cf6'
        };
        return colors[level] || colors[SERIOUSNESS_LEVELS.MILD];
    };

    return (
        <div className="seriousness-slider">
            <h3 className="slider-title">
                Seriosness Meter
            </h3>
            <div className="slider-container">
                <div className="slider-wrapper">
                    <input
                        type="range"
                        min={SERIOUSNESS_LEVELS.MILD}
                        max={SERIOUSNESS_LEVELS.UNHINGED}
                        value={seriousnessLevel}
                        className='slider'
                        aria-label='Seriousness level slider'
                        onChange={handleSliderChange}
                        style={{
                            '--slider-color:': getSliderColor(seriousnessLevel)
                        }}
                    />

                    <div className="slider-track">
                        <div
                            className="slider-progress"
                            style={{
                                width: `${((seriousnessLevel - 1) / 3) * 100}%`,
                                backgroundColor: getSliderColor(seriousnessLevel)
                            }}
                        />
                    </div>
                </div>

                <div className="slider-labels">
                    {Object.entries(SERIOUSNESS_LABEL)
                        .map(([level, label]) => (
                            <span
                                key={level}
                                className={`slider-label ${parseInt(level) === 
                                    seriousnessLevel ? 'active' : ''}`}
                                style={{
                                    color: parseInt(level) === seriousnessLevel
                                        ? getSliderColor(seriousnessLevel)
                                        : 'var(--text-muted)'
                                }}
                            >
                                {label}
                            </span>
                        ))}
                </div>
            </div>

            <div className="current-level">
                <span className='level-indicator'>
                    Current Level : 
                    <strong style={{color: getSliderColor(seriousnessLevel)}}>
                        {SERIOUSNESS_LEVELS[seriousnessLevel]}</strong>
                </span>
            </div>
        </div>
    )
}

export default SeriousnessSlider;