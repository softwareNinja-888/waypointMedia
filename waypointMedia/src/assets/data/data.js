export const createProject = (function(){
    let projects = [];
    let idCounter = 0;

    return {
        addProject: function (projectData) {

            const newProject = {
                id : idCounter++,
                project_name: projectData.project_name,
                description: projectData.description || ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque quisquam, dolores tempora fuga aliquam sint nisi unde quasi ut non excepturi accusamus ducimus voluptate! Deleniti facere nulla accusantium numquam.',
                img: projectData.img || '/0.webp',
                type: projectData.type || 'Landing Page',
                link: projectData.link || '',
                gitHub: projectData.gitHub || '',
            };

            projects.push(newProject)
            return newProject;
        },
        getProjects: function(){
            return projects;
        },
        getProjectById: function(id){
            return projects.find(project=> project.id === id);
        },

    }
})()

export const createPricing = (function(){
    let prices = [];
    let idCounter = 0;

    return {
        addPrice: function (price) {

            const newPrice = {
                id : idCounter++,
                type: price.type,
                price: price.price,
                description: price.description || "Perfect for using in a personal website or a client project.",
                buttonText: price.buttonText || "Choose Meduim Business",
                children: price.children,
            };

            prices.push(newPrice)
            return newPrice;
        },
        getPricing: function(){
            return prices;
        },
        getPricingById: function(id){
            return prices.find(price=> price.id === id);
        },
        
    }
})()


const Information = (function (){
  function createBasicInfo(name="Company Name",links=[],logoImg=''){
      return {
          name,
          links,
          logoImg,
      }
  }

  return {createBasicInfo}
})()

const companyName = 'BluePeak Media'
// YOU CAN EDIT THIS INFORMATION TO MANIPULATE DATA IN COMPONENTS BELOW
export const content = Information.createBasicInfo(
companyName,
["Our Story","Portfolio","Pricing","Contact",],
'/logo3.svg'
) 


export const information = [
    {
        id:0,
        company_name: "Waypoint Media",
        services: ['Web development','Web Design' ]
    },
    {
        id:1,
        name:'Project Info',
        get projects(){
            return createProject.getProjects()
        }
    },
    {
        id:2,
        name:'Pricing Info',
        get pricing(){
            return createPricing.getPricing()
        } ,
        services: [
                    {name:'Website',starter:'tick',smartGrowth:'tick',fullBooking:'tick'},
                    {name:'Social media management ',starter:'',smartGrowth:'',fullBooking:''},
                    {name:'Email marketing',starter:'',smartGrowth:'',fullBooking:''},
                    {name:'Full CRM system setup with guest automation',starter:'',smartGrowth:'',fullBooking:''},
                    {name:'Review + Reputation Management',starter:'',smartGrowth:'',fullBooking:''},
                    {name:'Full photography session + 360° virtual tour',starter:'',smartGrowth:'',fullBooking:''},
                    {name:'Monthly performance strategy call',starter:'',smartGrowth:'',fullBooking:''},
                ]
    }
]

// ADDING PROJECTS
createProject.addProject({
    project_name: 'Nova Heights',
    img: '/mockups/mockupHotel.avif',
    type: 'Real Site',
    link: 'https://noma-skincare.vercel.app/',
    gitHub:'',
})

createProject.addProject({
    project_name: 'Royal Villas',
    img: '/mockups/mockupBlog.avif',
    type: 'Showcase',
    link: 'https://salt-light-blog.vercel.app/',
    gitHub:'',
})

createProject.addProject({
    project_name: 'Royal Villas',
    img: '/mockups/mockupTorch.avif',
    type: 'Showcase',
    link: 'https://salt-light-blog.vercel.app/',
    gitHub:'',
})

createProject.addProject({
    project_name: 'Royal Villas',
    img: '/mockups/mockupNOMA.avif',
    type: 'Showcase',
    link: 'https://salt-light-blog.vercel.app/',
    gitHub:'',
})

// ADING PRICING 
createPricing.addPrice({
    type: 'Starter Presence',
    price: 2000,
    buttonText: "Choose Starter Presence",
    description: "Ideal for smaller guesthouses or Airbnbs.",
    children: [
        "1-page responsive website or landing page",
        "Social media setup or 1 platform management (2 posts/week)",
        "Basic Google Business setup",
        "Review monitoring",
        "Monthly analytics report"
      ]
})
createPricing.addPrice({
    type: 'Smart Growth',
    price: 4000,
    buttonText: "Choose Smart Growth",
    description: "Perfect for boutique hotels and lodges, who truly want to standout from competiton online.",
    children: [
        "Full website (up to 5 pages)",
        "Social media management ",
        "Email marketing setup",
        "CRM integration",
        "Reputation management",
        "Photography OR 360° virtual tour (1-time shoot)",
        "Monthly reporting + recommendation",
      ]

}) 
createPricing.addPrice({
    type: 'Full Booking Funnel',
    price: 'Custom',
    buttonText: "Choose Full Booking Funnel",
    description: "Perfect for high-end lodges, chains, or hotels aiming to maximize bookings.",
    children: [
        "Advanced website (SEO-optimized, booking system integration)",
        "Social media management",
        "Email marketing setup",
        "Full CRM system setup with guest automation",
        "Review + Reputation Management",
        "Full photography session + 360° virtual tour",
        "Monthly performance strategy call"
      ]
})
