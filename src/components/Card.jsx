import dataApod from "../database/database";

const Card = () => {
    return (
        <>
            {dataApod.map(astroDay =>
                <div key={dataApod.id}>
                    <h3>{astroDay.title}</h3>
                    <p>{astroDay.date}</p>
                    <p>{astroDay.explanation}</p>
                    <img src={astroDay.url} alt={astroDay.title} />
                </div>
            )}
        </>
    )
}

export default Card;