
export default function Subscribing({ email, setFormSubmit }) {


    return (
        <div className="subscribingPage">
            <img src="./src/assets/Img/buyukTik.svg" alt="Large Check Icon" />
            <h1>Abone olduğun için teşekkürler!</h1>
            <p>Bir "onaylama" e-mail'i <b>{email}</b>' a gönderilmiştir .Aboneliğinizi onaylamak için lütfen mailinizi açın ve içindeki düğmeye tıklayın.</p>
            <button onClick={() => setFormSubmit(false)}>Mesajı kapa</button>
        </div>
    )
}