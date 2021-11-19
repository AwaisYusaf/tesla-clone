import React from 'react'
import Section from './Section'
import {cars} from './Data';
import { BrowserRouter as Router, Route } from "react-router-dom";

function Home() {
    console.log(cars);
    return (
        <Router>
            <div>
                {
                    cars.map((car)=>{
                        return <Section key={car.id}
                        title={car.title}
                        description={car.description}
                        image={car.image}
                        rightBtnText="Existing Inventory" 
                        />
                    })

                }
                <Route path="/solar-panel">
                    <Section
                        key={Math.random()*1}
                        id="solar_panel"
                        title="Lowest Cost Solar Panels in Pakistan"
                        description="Money-back gurantee"
                        image="solar-panel.jpg"
                        leftBtnText="Order Now"
                        rightBtnText="Learn more"    
                    />
                </Route>

                <Section
                    key={Math.random()*1}
                    id="solar-roof"
                    title="Solar for New Roofs"
                    description="Solar Roof Costs Less Than a New Roof"
                    image="solar-roof.jpg"
                    leftBtnText="Order Now"
                    rightBtnText="Learn more"    
                />

                <Section
                    key={Math.random()*1}
                    title="Accessories"
                    description=" "
                    image="accessories.jpg"
                    leftBtnText="Shop Now"  
                />
            </div>
        </Router>
    )
}

export default Home;