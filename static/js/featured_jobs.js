const jobs = [
{
    title:"Senior ReactJS Developer",
    company:"Tiki Corporation",
    location:"Hà Nội",
    salary:"1,000 - 3,000 USD",
    level:"Senior",
    type:"Hybrid"
},
{
    title:"Senior ReactJS Developer",
    company:"Tiki Corporation",
    location:"Hồ Chí Minh",
    salary:"1,000 - 3,000 USD",
    level:"Senior",
    type:"Hybrid"
},
{
    title:"Frontend Developer",
    company:"FPT Software",
    location:"Đà Nẵng",
    salary:"800 - 2,000 USD",
    level:"Middle",
    type:"Remote"
}
];

const container =
document.getElementById("job-list");

jobs.forEach(job => {

    container.innerHTML += `
    <div class="job-card">

        <div class="company-logo"></div>

        <div class="job-info">

            <h3>${job.title}</h3>

            <p class="company">${job.company}</p>

            <p class="location">📍 ${job.location}</p>

            <p class="salary">
                Lương: ${job.salary}
            </p>

            <div class="tags">
                <span class="tag">${job.level}</span>
                <span class="tag">${job.type}</span>
            </div>

        </div>

    </div>
    `;
});