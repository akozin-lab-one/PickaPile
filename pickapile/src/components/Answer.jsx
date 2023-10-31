import React, { useState } from "react";
import { useParams } from "react-router";
import Images from "./ImageFile";
import { NavLink } from 'react-router-dom';
import Footer from "./Footer";

const Answer = ({ questions, answers }) => {
  const [containerVisible, setContainerVisible] = useState(false);
  const [result, setResult] = useState([]);
  const [text, setText] = useState([]);
  console.log(answers);
  const ansId = useParams();
  console.log(ansId.id);
  const combinedArray = Array.isArray(answers)
    ? answers.map((item1) => {
        const correspondingItem2 = questions.find(
          (item2) => item2.QuestionId === item1.QuestionId
        );
        if (correspondingItem2) {
          return {
            Name: correspondingItem2.QuestionName,
            description: correspondingItem2.QuestionDesp,
            Id: correspondingItem2.QuestionId,
          };
        }
        return item1;
      })
    : "";
  console.log(combinedArray);

  const selectedItems = [];

  for (let i = 0; i < combinedArray.length; i += 4) {
    const group = combinedArray.slice(i, i + 4);
    if (group.length > 0) {
      selectedItems.push(group[0]);
    }
  }
  console.log(selectedItems);

  const Title = Array.isArray(selectedItems)
    ? selectedItems.filter(
        (select) => parseInt(select.Id) === parseInt(ansId.id)
      )
    : "";
  console.log(Images);
  const getPictureId = (Id) => {
    console.log(Id);
    setContainerVisible(true);
    console.log(containerVisible);
    const resAns = Images.filter((ans) => ans.ansId === Id);
    console.log(resAns);
    setResult(resAns);

    const textRes = answers.filter(ans => ans.AnswerId === Id);
    console.log(textRes);
    setText(textRes);
  };
  if (
    JSON.stringify(answers) !== "[]" &&
    JSON.stringify(questions) !== "[]" &&
    JSON.stringify(Title) !== "[]"
  ) {
    const res = Array.isArray(Images)
      ? Images.filter((ans) => parseInt(ans.QuestionId) === parseInt(ansId.id))
      : "";
    console.log(res);
    console.log(Title[0]);
    return (
      <div className="container w-[85%] mx-auto h-screen">
        <h3 className="my-2 font-extra-bold text-xl">{Title[0].Name}</h3>
        <div className="flex w-[100%] md:w-[40%] lg:w-[40%] xl:w-[40%] my-2 justify-between">
          <p><i class="fa-solid fa-user"></i><span className="text-xs">By Admin</span></p>
          <p><i class="fa-regular fa-comment"></i> <span className="text-xs">0 Comment</span></p>
          <p><i class="fa-regular fa-eye"></i> <span className="text-xs"> 0 views</span></p>
        </div>
        <p className="my-2 leading-7 tracking-wide">{Title[0].description}</p>
        <div className="h-auto lg:h-[60%] xl:h-[48%] mt-2 mb-7 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-x-2 gap-y-2 mx-auto">
          {Array.isArray(res)
            ? res.map((re) => {
                return [
                  <div className="xl:w-[280px] lg:w-[250px] lg:h-[54%] md:w-[182px] md:h-[70%] xl:h-[60%]" key={re.QuestionId}>
                    <img
                      onClick={() => {
                        getPictureId(re.ansId);
                      }}
                      className="xl:w-[280px] mt-8 xl:mt-0 xl:h-[100%] md:w-[85%] md:h-[85%] shadow-gray-600 hover:scale-105 cursor-pointer hover:duration-75  rounded-xl hover:drop-shadow"
                      src={re.imageUrl}
                      alt=""
                    />
                  </div>,
                ];
              })
            : ""}
        </div>
            <div>
              <NavLink to='/questions'>
                <p className="w-20 bg-purple-500 text-center text-white rounded-lg h-7 mb-3">back</p>
              </NavLink>
            </div>
          {containerVisible && (
            <div className="container w-[100%] h-[100%] mb-10 bg-gray-200 mx-auto md:h-[50%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <img
                  className="w-[70%] xl:w-[50%] lg:w-[50%] md:w-[50%] my-2 h-[50%] mx-auto "
                  src={result[result.length - 1].imageUrl}
                  alt=""
                />

                <div className="mx-auto xl:py-8 py-0 h-[50%]">
                  <h3 className="text-center">{text[text.length - 1].AnswerName}</h3>
                  <p className="px-2 md:text-sm">
                  {text[text.length - 1].AnswerDesp}
                  </p>
                </div>

            </div>
          )}
          <Footer/>
      </div>
    );
  }
};

export default Answer;
