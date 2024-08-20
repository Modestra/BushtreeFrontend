import HeaderApp from "../components/Header";
import "./FlowersPage.css"

function FlowersPage(){
    return(
        <>
            <HeaderApp></HeaderApp>
            <div className="container form__container col-9">
                <h1 className="form__header">Настройте параметры и получите макет из растений вашего региона</h1>
                <form className="col-8">
                    <section className="group__container">
                        <p>Период цветения</p>
                        <label htmlFor="apr-may">Апрель-май</label>
                        <input type="radio" name="period_blossom" id="apr-may" />
                        <input type="radio" name="period_blossom" id="" />
                        <input type="radio" name="period_blossom" id="" />
                    </section>
                    <section className="group__container">
                        <p>Морозоустойчивость</p>
                        <input type="checkbox" name="" id="" />
                        <input type="checkbox" name="" id="" />
                        <input type="checkbox" name="" id="" />
                    </section>
                    <section className="group__container">
                        <p>Освещенность</p>
                        <label htmlFor="apr-may">Апрель-май</label>
                        <input type="radio" name="" id="" />
                        <input type="radio" name="" id="" />
                        <input type="radio" name="" id="" />
                    </section>
                    <section className="group__container">
                        <p>Режим полива</p>
                        <label htmlFor="apr-may">Апрель-май</label>
                        <input type="radio" name="" id="" />
                        <input type="radio" name="" id="" />
                        <input type="radio" name="" id="" />
                    </section>
                    <section className="group__container">
                        <p>Морозоустойчивость</p>
                        <input type="checkbox" name="" id="" />
                        <input type="checkbox" name="" id="" />
                        <input type="checkbox" name="" id="" />
                        <input type="checkbox" name="" id="" />
                        <input type="checkbox" name="" id="" />
                    </section>
                    <button className="btn btn-success" type="submit">Создать цветник</button>
                </form>
            </div>
        </>
    )
}

export default FlowersPage;