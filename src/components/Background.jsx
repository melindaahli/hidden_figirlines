import BackgroundImg from '../assets/background graphics.png'

export default function Background(){
    return (
        <div
            className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${BackgroundImg})`,
                backgroundSize: '90%', // smaller than full
                backgroundPosition: 'center',
            }}
        />
    );
}