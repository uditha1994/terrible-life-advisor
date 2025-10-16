import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-content'>
                    <h1 className='header-title'>
                        <span className='title-icon'>💀🎀</span>
                        <span className='title-text'>Terrible Life Advisor</span>
                    </h1>
                    <p className='header-subtitle'>
                        Get bad advices from hell,
                        It's actually brilliant!!
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header;