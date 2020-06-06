import React, { useRef } from "react";
import CollapseStyle from "./CollapseStyle";

const Collapse = () => {
  const handleClick = (e, type) => {
    e.persist();
    console.log(e, type);
    const customeAttr = type === "group" ? "group-id" : "division-id";
    const id = e.currentTarget.getAttribute(customeAttr);
    let buttonCurrent;
    if (type === "group") {
      buttonCurrent = groupRef.current[id].current;
    } else {
      buttonCurrent = divisionRef.current[id].current;
    }
    const collapsedElement = buttonCurrent.parentElement.nextSibling.classList;
    if (collapsedElement.contains("hide")) {
      collapsedElement.remove("hide");
      buttonCurrent.classList.remove("plus");
    } else {
      collapsedElement.add("hide");
      buttonCurrent.classList.add("plus");
    }
  };
  const groupRef = useRef(
    Array(4)
      .fill(null)
      .map(() => React.createRef())
  );
  const divisionRef = useRef(
    Array(8)
      .fill(null)
      .map(() => React.createRef())
  );
  let divGlobalIndex = -1;
  return (
    <CollapseStyle>
      {["first", "second", "third", "fourth"].map((group, index) => {
        return (
          <div className="group-container" key={`group${index}`}>
            <div>
              <button
                className="expand plus"
                ref={groupRef.current[index]}
                group-id={index}
                onClick={e => handleClick(e, "group")}
              />
              Parent {index + 1}
            </div>
            <div className="group collapse-content hide">
              <strong>{group}</strong>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              porro, facilis dolorum similique aliquam id, perspiciatis itaque
              totam excepturi amet, quia eum.
              {["division1", "division2"].map((division, divIndex) => {
                divGlobalIndex++;
                return (
                  <div
                    className="division-container"
                    key={`division${divIndex}`}
                  >
                    <div>
                      <button
                        className="expand plus"
                        ref={divisionRef.current[divGlobalIndex]}
                        division-id={divGlobalIndex}
                        onClick={e => handleClick(e, "division")}
                      />
                      Child {divGlobalIndex + 1}
                    </div>
                    <div className="division collapse-content hide">
                      <strong>{division}</strong>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maxime porro, facilis dolorum similique aliquam id,
                      perspiciatis itaque totam excepturi amet, quia eum.
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </CollapseStyle>
  );
};

export default Collapse;
