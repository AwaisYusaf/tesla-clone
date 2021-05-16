import React from 'react'
import Section from './Section'
import {cars} from './Data';


function Home() {
    console.log(cars);
    return (
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
            <Section
                key={Math.random()*1}
                title="Lowest Cost Solar Panels in Pakistan"
                description="Money-back gurantee"
                image="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn more"    
            />

            <Section
                key={Math.random()*1}
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
    )
}

export default Home;