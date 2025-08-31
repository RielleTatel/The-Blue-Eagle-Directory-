import BrushImage from "/assets/Brush.png"; 

const BrushStroke = () => {
    return (
        <div className="hidden sm:block absolute w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[219px] lg:h-[219px] left-4 sm:left-8 lg:left-60 top-0"> 
            <img src={BrushImage} alt="BrushStroke" className="w-full h-full object-cover" />
        </div>
    )
}

export default BrushStroke; 