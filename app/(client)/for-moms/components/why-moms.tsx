import Image from "next/image";

const WhyMoms = ()=>{

    const intems = [
        {
          src: "./skip.png",
          title: "Skip the Sitters",
          des: "No need to arrange childcare. Get pampered while the kids nap or play.",
        },
        {
            src: "./stay.png",
            title: "Stay in Your Comfort Zone",
            des: "No more rushing across town. We bring the beauty studio to your living room.",
          },
          {
            src: "./flexible.png",
            title: "Flexible Scheduling",
            des: "Early mornings, late evenings, weekends-we work around your life.",
          },
          {
            src: "./selfcare.png",
            title: "Real Self-Care, Finally",
            des: "You do so much for everyone else. This ones for you.",
          },
    ]
    return(
        <section className="relative">
            <div className="grid md:grid-cols-2">
                <div className="section-padding relative">
                    <h2 className="md:text-5xl font-bold text-mimbboRed pt-24">Why Moms Love <br></br> Mimbbo</h2>
                    <p className="md:text-[20px] text-[16px] pt-4 text-[#181A20]">Aliquam lacinia diam quis lacus euismod</p>
                </div>
                <Image src="./curlymom.png" alt="mom" width={900} height={800} className="w-full relative" />
            </div>
            <div className="flex bg-white w-[1295px] h-[300px] rounded-lg gap-8 p-6 absolute right-20 bottom-6">
                {intems.map((item, index)=>
                <div className="p-6">
                <Image src={item.src} alt="" width={50} height={50}/>
                <p className="md:text-[16px] text-base font-bold pt-10">{item.title}</p>
                <p className="md:text-[16px] text-base pt-2">{item.des}</p>
                </div>
                )}
            </div>
        </section>
    )
}

export default WhyMoms;