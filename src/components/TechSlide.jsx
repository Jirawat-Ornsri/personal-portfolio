import Slider from 'react-infinite-logo-slider'
import './TechSlide.css'

const TechSlide = () => {

    return (
        <div className="tech-logo-slide-con">
            <Slider
                duration={40}
                pauseOnHover={true}
                blurBorders={false}
                blurBoderColor={'#fff'}
            >
                <Slider.Slide>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" alt="python" className='slider-logo-img' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/html-512.png" alt="html" className='slider-logo-img' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="https://static-00.iconduck.com/assets.00/file-type-css-icon-1806x2048-r5fwjl3p.png" alt="css" className='slider-logo-img' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="javascript" className='slider-logo-img' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react" className='slider-logo-img' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="https://static-00.iconduck.com/assets.00/flutter-icon-2048x2048-ufx4idi8.png" alt="flutter" className='slider-logo-img' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="https://static-00.iconduck.com/assets.00/dart-icon-2042x2048-775u9j9x.png" alt="dart" className='slider-logo-img' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/2048px-Firebase_icon.svg.png" alt="firebase" className='slider-logo-img' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="https://static-00.iconduck.com/assets.00/apps-figma-icon-2048x2048-ctjj5ab7.png" alt="figma" className='slider-logo-img' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" alt="git" className='slider-logo-img' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png" alt="vscode" className='slider-logo-img' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="https://static-00.iconduck.com/assets.00/github-icon-512x511-q5m65q8c.png" alt="github" className='slider-logo-img' />
                </Slider.Slide>
            </Slider>
        </div>

    )
}

export default TechSlide