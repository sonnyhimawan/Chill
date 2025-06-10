import CardFilmHero from "../atoms/card/CardFilmHero";



const HeroSection = () => {


    const films = [
        {
            id: 1,
            name: "Duty After School",
            title: "Duty After School",
            image: "assets/img/Duty-School.png",
            rating: 4.5,
            badge: "Episode Baru"
        }
    ]

    return (
        <section>
            <div className="w-full mx-auto pt-20">
                <div className="grid grid-cols-12">
                    {films.map((HeroItems) => (

                        <CardFilmHero
                            key={HeroItems.id}
                            {...HeroItems}
                        />
                    ))}
                </div>
            </div>
        </section>



    )



}

export default HeroSection;