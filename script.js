const question = document.getElementById("question");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

noButton.addEventListener("click", (e) => {
    e.preventDefault(); // Запрещает нажатие кнопки "Жоқ"
});

yesButton.addEventListener("click", () => {
    question.innerText = "Бірақ беретін ақшам көп емес жүрегім, кешіресізба?";
    yesButton.innerText = "Иә";
    noButton.innerText = "Жоқ";

    yesButton.onclick = () => {
        question.innerText = "Телеграмнан маған жаз";
        yesButton.style.display = "none";
        noButton.style.display = "none";
    };

    noButton.onclick = () => {
        question.innerText = "Жақсы";
        yesButton.style.display = "none";
        noButton.style.display = "none";
    };
});
