import React from "react";
import myImage1 from "../data/articles/1/1.jpg";
import myImage2 from "../data/articles/2/1.jpg";
import myImage3 from "../data/articles/3/1.jpg";
import myImage4 from "../data/articles/4/1.jpg";
import myImage5 from "../data/articles/5/1.jpg";
import myImage6 from "../data/articles/6/1.jpg";
import myImage7 from "../data/articles/7/1.jpg";
import myImage8 from "../data/articles/8/1.jpg";
import myImage9 from "../data/articles/9/1.jpg";
import myImage10 from "../data/articles/10/1.jpg";
import myImage11 from "../data/articles/11/1.jpg";
import myImage12 from "../data/articles/12/1.jpg";
import myImage13 from "../data/articles/13/1.jpg";
import myImage14 from "../data/articles/14/1.jpg";
import myImage15 from "../data/articles/15/1.jpg";
import { NavLink } from 'react-router-dom';
import Footer from "./Footer";

const Questions = ({ questions, answers }) => {
  const myImage = [
    myImage1,
    myImage2,
    myImage3,
    myImage4,
    myImage5,
    myImage6,
    myImage7,
    myImage8,
    myImage9,
    myImage10,
    myImage11,
    myImage12,
    myImage13,
    myImage14,
    myImage15,
  ];
  console.log(myImage[0]);

  if (JSON.stringify(questions) !== "[]" && JSON.stringify(answers) !== "[]") {
    console.log(answers);
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

    return (
      <div>
        <h3 className="text-center my-4 text-base lg:text-xl font-extrabold">
          ကံကြမ္မာလား... ကိုယ်နဲ့ဖူးစာပါတဲ့လူအကြောင်းလား... ဘာတွေသိချင်လဲ...
          ကတ်တွေက‌ပြောပြပါလိမ့်မယ်...
        </h3>
        <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 px-4 py-4 md:px-14 lg:px-2 gap-x-2 gap-y-4">
          {Array.isArray(selectedItems)
            ? selectedItems.map((que) => {
                return [
                  <div
                    key={que.Id}
                    className="bg-gray-300 rounded-lg w-[85%] md:w-[210px] lg:w-[240px] xl:w-[300px] mx-auto"
                  >
                    <img
                      className="rounded-t-lg w-[100%] md:w-[210px] lg:w-[240px] xl:w-[300px] h-[300px]"
                      src={myImage[que.Id - 1]}
                      alt="question_photo"
                    />
                    <div className="mt-0 px-2 py-2">
                      <h5 className="my-2">{que.Name}</h5>
                      <p className="text-base md:text-sm lg:text-base">
                        {que.description.slice(0, 45).concat("...")}
                      </p>
                    </div>
                    <div className="my-2 ml-3">
                      <NavLink to={`/questions/${que.Id}/answers`}>
                      <p className="w-[100px] cursor-pointer text-center h-[30px] rounded-lg drop-shadow bg-purple-600 text-white">
                        Read More
                      </p>
                      </NavLink>
                    </div>
                  </div>,
                ];
              })
            : "questions is loading"}
          <div
            className="bg-gray-300 rounded-lg w-[70%] md:w-[210px] lg:w-[240px] xl:w-[300px] mx-auto flex justify-center items-center"
          >
            <div className="my-2 ml-3">
              <NavLink to='/'>
              <p className="w-[200px] cursor-pointer text-center h-[60px] pt-4 rounded-lg drop-shadow bg-purple-600 text-white">
                BACK
              </p>
              </NavLink>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
};

export default Questions;
