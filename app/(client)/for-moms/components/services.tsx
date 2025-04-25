'use client';


import Image from "next/image";

const Services = ()=>{
    const items =[
        {
            src:"./dryer.png",
            title:"Hair",
            list: [
                "Silk Presses",
                "Braids",
                "Blowouts",
                "Trims",
            ]
        },
        {
            src:"./cutex.png",
            title:"Nails",
            list: [
                "Manis",
                "Pedis",
                "Gel sets",
                "Nail art",
            ]
        },
        {
            src:"./skin.png",
            title:"Skin",
            list: [
                "Facials",
                "Brow shaping",
                "Lash extensions",
            ]
        },
        {
            src:"./event.png",
            title:"Events",
            list: [
                "Quick glam for weddings, parties, or big moments",
            ]
        },
    ]
    return(
        <section className="section-padding bg-white">
          <h2 className="text-2xl md:text-3xl font-bold text-center pt-20 md:pt-32">What Services Can You Book?</h2>
          <div className="flex md:gap-8 gap-4 flex-wrap justify-center items-center pb-28">
            {items.map((item, index)=>
            <div key={index}>
            <div className="flex gap-4 text-2xl items-center justify-center pb-10 md:pt-16 pt-10">
            <Image src={item.src} alt="" width={30} height={30}/>
            <p className="font-bold text-2xl md:text-3xl">{item.title}</p>
            </div>
            <ul className="list-disc list-inside w-[290px] h-[250px] bg-[#fdf6f1] rounded-lg p-16 text-[16px]">
            {item.list.map((item, index)=>
            <li key={index} className="[&::marker]:text-mimbboRed [&::marker]:text-lg">{item}</li>
            )}
            </ul>
            </div>
            )}
          </div>
        </section>
    )
}

export default Services