const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const faq= document.querySelector(".faq")
const heading = document.querySelectorAll(".heading");
const btn = document.querySelectorAll(".show_btn");
const hide= document.querySelectorAll(".faq_hide");
const questionArray=[];
const answerArray=[];

for(e of faqData){
  questionArray.push(e.question);
}

for(f of faqData){
  answerArray.push(f.answer);
}

heading.forEach((h,index)=>{
  h.textContent=questionArray[index];
})
 

  btn.forEach((button, index) => {
    button.addEventListener("click", () => {
      hide[index].classList.toggle(`hidden${index+1}`);
    })
  })

