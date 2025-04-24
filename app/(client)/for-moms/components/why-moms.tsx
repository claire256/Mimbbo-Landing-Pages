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
            <div className="grid xl:grid-cols-2">
                <div className="section-padding relative text-center xl:text-start">
                    <h2 className="md:text-5xl text-3xl font-bold text-mimbboRed xl:pt-24 pt-0">Why Moms Love <br></br> Mimbbo</h2>
                    <p className="md:text-[20px] text-[16px] pt-4 pb-10 xl:pb-0 text-[#181A20]">Aliquam lacinia diam quis lacus euismod</p>
                </div>
                <Image src="./curlymom.png" alt="mom" width={900} height={800} className="w-full relative" />
            </div>
            <div className="xl:flex bg-white xl:w-[1295px] xl:h-[300px] rounded-lg gap-8 p-6 xl:absolute xl:right-20 xl:bottom-6">
                {intems.map((item, index)=>
                <div className="p-6  grid md:place-items-center xl:place-items-start">
                <Image src={item.src} alt="" width={50} height={50} className="md:w-[50px] md:h-[50px] h-8 w-8" />
                <p className="md:text-[16px] text-base font-bold md:pt-10 pt-6">{item.title}</p>
                <p className="md:text-[16px] text-base pt-2">{item.des}</p>
                </div>
                )}
            </div>
        </section>
    )
}

export default WhyMoms;