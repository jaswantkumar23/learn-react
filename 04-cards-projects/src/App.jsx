import Card from "./components/card";
const App = () => {
  const jobs = [
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeX6ku69_92RMDzmUn_e0swxsNonUDN2JaTZ_XamgOw&s=10",
      name: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$35/hour",
      location: "Mountain View, California",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJANb0XItp3xw1MB-dF4ccHxxCtgDc7auj-nAXlk-vw&s=10",
      name: "Microsoft",
      datePosted: "1 week ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$32/hour",
      location: "Redmond, Washington",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ytacub8-DO5Y62Oj46GxWVyL2TWQX_GSNPfQ4mBJHA&s=10",
      name: "Amazon",
      datePosted: "3 days ago",
      post: "Cloud Support Associate",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$28/hour",
      location: "Seattle, Washington",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDZfQFgkOx0fkvr7xATdrEQfiBSLGMSkLX4C6few5AA&s=10",
      name: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$30/hour",
      location: "Menlo Park, California",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rApSjDXCOAsStw4_AN64xcOJJNOKor2lTOhPxChGPA&s=10",
      name: "Apple",
      datePosted: "10 days ago",
      post: "iOS Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$40/hour",
      location: "Cupertino, California",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYaHC_9YxqnPCCaadcefalsMg2EOkjYOedtUHk1DvhWQ&s=10",
      name: "Netflix",
      datePosted: "3 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$48/hour",
      location: "Los Gatos, California",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzc0e6SURXASh62pzaZIQCEbw1BYBRU6op75iksyGqNA&s=10",
      name: "IBM",
      datePosted: "4 days ago",
      post: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$36/hour",
      location: "Austin, Texas",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56m1402i8R91l2dvvuKylYGUoA7ykvL5pCBoQM3McQw&s=10",
      name: "Oracle",
      datePosted: "6 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$42/hour",
      location: "Austin, Texas",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4cvli6tFMgdWcZvqveTrFNk96w_cYzntM68jcWoYfA&s=10",
      name: "NVIDIA",
      datePosted: "10 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$45/hour",
      location: "Santa Clara, California",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrn-ikBlwrgxAQMicc8PQClBIsFFPGxVTAROOPZ12TA&s=10",
      name: "Salesforce",
      datePosted: "8 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$31/hour",
      location: "San Francisco, California",
    },
  ];

  return (
    <div className="parent">
     {jobs.map(function(job){
      return <Card
      brandLogo={job.brandLogo}
      companyName={job.name}
      datePosted={job.datePosted}
      post={job.post}
      tag1={job.tag1}
      tag2={job.tag2}
      pay={job.pay}
      location={job.location}
      />
      
    })}
    </div>
  );
};

export default App;
