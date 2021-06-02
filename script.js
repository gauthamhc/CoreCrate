var accordions = document.getElementsByClassName("accordion");
console.log(accordions.length);

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function () {
    this.classList.toggle("is-open");

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
}

let industryType = "";

const contents = document.querySelectorAll("#industry li");
const industrySubclasses = document.querySelectorAll(".industries_subclasses");

industrySubclasses.forEach((industrySubclass) => {
  industrySubclass.addEventListener("click", () => {
    industryType = industrySubclass.dataset.industryType;
    console.log(industryType);
  });
});

contents.forEach((content) => {
  content.addEventListener("click", () => {
    const createdIndustry = document.createElement("p");
    createdIndustry.innerText = content.innerText;
    const closeIcon = document.createElement("span");
    closeIcon.innerHTML = "&times;";
    createdIndustry.append(closeIcon);
    const selectedIndustry = document.querySelector(
      "." + industryType + " div"
    );
    selectedIndustry.append(createdIndustry);
    closeIcon.addEventListener("click", () => {
      createdIndustry.remove();
    });
  });
});

// const deleteContents = document.querySelectorAll(
//   ".industries_classification p"
// );

// console.log(deleteContents);
