import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const profileData = [
        {
            name: "Patrick",
            img: "https://firebasestorage.googleapis.com/v0/b/knowyourneighbour-a0eec.appspot.com/o/patrick.jpg?alt=media&token=007464f0-e187-45c3-9740-12fe5e82b01d",
            story: "When I met Patrick, he was sitting down outside the CIBC bank in downtown Collingwood. He was holding a sign made out of a box of cheerios which read “Homeless and trying to get back on feet.” Within minutes of speaking with him, it became very clear what a kind and intelligent person he was. Patrick is 29 years old and grew up in the area until around the age of 11. After which he grew up in the foster care and group home system, he said that it had been a very damaging experience. He didn’t elaborate much but he said “if I had to choose between going back to that, or jail, I would choose jail.” He’s been homeless since he was kicked out of his apartment in Barrie this October, just before the harsh winter. This is the first time in his life he’s ever experienced homelessness, he said it's been very hard and “It definitely takes a toll on you.” I asked him what he thinks needs to be changed on a government level to substantially help the homeless. He says there needs to be more places to sleep, that the government needs to be funding human and social resources for the homeless and tangibly build shelters themselves. Within the community he said there's an AA and NA that meet, which is good, but that alone is not enough and the shelters here aren’t as reliable and stable as they should be. When I asked how he feels the community interacts with him he said “It’s about fifty-fifty.” He feels that people either don’t know how to act and pretend he doesn’t exist, or can’t stop staring. He told me a story about last month when he was spat on and harassed by a group of passersby at night, simply because of his homelessness. He was also clearly hurt when he told me about how he sees people crossing the street just to avoid walking by him. Patrick has been down on his luck for years now, he lost his job as a DSW and his wife passed away two years ago from pneumonia. He also misses his dogs Lucy and Ruby that he had to give away because he could no longer afford taking care of them. He’s stuck here because of his financial situation, but he wants to get out of this area, “I’ve got family in Newfoundland, that's where I’d go.” With the housing market on fire right now, he says that government subsidies are not as helpful as they may have once been."
        },
        {
            name: "Jory",
            img: "https://firebasestorage.googleapis.com/v0/b/knowyourneighbour-a0eec.appspot.com/o/jory.jpg?alt=media&token=06034db3-fac8-401e-9c6b-35c259a3245c",
            story: "I met Jory as he was panhandling downtown in the snow on January 24th. After introducing myself we quickly and easily struck up a conversation. During which, he revealed himself to be a very interesting and insightful person with astute and valuable perspectives of the world surrounding him. Jory moved to the Collingwood area in 2012, where he worked full time as an irrigation technician for a little over eight years. His 37th birthday is coming up soon, sometime this february. He moved here from Kitchener, where he grew up, he says that labour is more valued here and it pays better in Collingwood than in the GTA, hence his move. Jory left highschool when he was only fifteen years old, his mother began charging him rent to live at home immediately after. He didn’t elaborate much when asked about his childhood, but he told me that he has a very negative relationship with his father, and his mother “struggles with her own demons” leading to a drinking problem. “Me and my sister raised ourselves” is what he told me. Jory has had a rough life in many ways, he was very open and honest about his past struggle with an opioid addiction. His addiction began prior to moving to Collingwood as a result of a workplace accident while roofing. Jory broke his heel in a fall and became addicted to his medically prescribed opioids. However, he proudly told me he has since recovered and is now happily sober. Jory described to me the happy and successful life he led here in Collingwood doing irrigation and landscaping since 2012, prior to his homelessness. Jory describes himself as a “big outdoorsman” and hockey fan, he and I both share a lot of the same favourite hiking trails to explore along the escarpment and around Collingwood. Jory ended up getting laid off from his job twice as a result of the COVID-19 pandemic, and in the aftermath the business never picked back up again. As a result Jory’s pay was changed from salary to hourly wages, and as the work dried up in COVID’s aftermath he quickly wasn’t making nearly enough to keep up with bills and rent. He had paid off all his debt and was making $1100 a week, but with the lack of work after COVID he was no longer able to make a decent wage. Eventually, his employers had to permanently lay off many employees just to stay afloat. According to Jory “..everything was because of COVID, the beginning of my unravelling.” On April 13th, 2022 Jory was kicked out of his apartment and onto the streets when he could no longer make rent. Jory found that in the summer months it was much easier to be outside all day and to sleep at night, but the chill of the winter has been really hard on him. Because many shelters operate on a first come first serve basis, and have a very limited capacity, if Jory can’t get a bed at one he’s forced to sleep in the bank lobbies of downtown. Certain banks he told me, like the BMO, have security that come around during the night just to make sure no one is in there seeking shelter. Jory also told me that at first he refused to panhandle, seeing it as humiliating and undignifying, until he had no other choice after going hungry for over 5 days and was “weak with hunger.” He then wrote his first sign “forget being homeless, i'm hungry.” When I asked how the community interacts with him he feels that overall it's positive, and that specifically the elderly in the community tend to be the most sympathetic and helpful to him. The town government on the other hand, does next to nothing Jory says. Jory says that it's not only the municipal government, but also the federal government that does almost nothing to help alleviate homelessness. All help that Jory receives is from the goodwill of community members alone. This is also reflective of the fact that all emergency shelters and human resources for the homeless in Collingwood are charitable organisations run by community members, not run in any way by the government. Jory thinks the town wants to keep the homeless population out of sight and out of mind, away from the eyes of tourists. He says that the town does nothing to help because they “want us to move along” the town even sends the police to make Jory and other homeless people move away from the downtown “they try to break us”. All of this clearly discourages Jory greatly, he said that “I feel unwanted” because of this lack of aid from the town. But Jory is staying strong, and knows that he has every much the right to be a member of his community as anyone else, in his words “I’m not leaving, this is where home is.”"
        }
    ]

    let data = profileData.filter(p => p.name.toLowerCase() === params.slug.toLowerCase());
    
    if (data !== null) {
        return {
            data
        }
    }
    
    throw error(404, 'Not found');
}