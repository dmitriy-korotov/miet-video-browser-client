'use client';

import { NextPage } from "next";
import { useEffect, useState } from "react";

import { Subject } from "@/src/types/subject/Subject";

import SubjectsListItem from "./SubjectsListItem/SubjectsListItem";

import "@/src/components/ui/SubjectsList/SubjectsList.css";



const SubjectsList: NextPage<{subjects: Subject[],
                              initialSelected: Subject,
                              onSelect?: (subject: Subject) => void}> = ({ subjects, initialSelected, onSelect }) => {

    const [ isOpenedList, setListState ] = useState(false);

    const [ selectedValue, setSelectedValue] = useState(initialSelected);

    return (
      <div id="select-box">
        <div id="select-button" className="brd" onClick={event => setListState(!isOpenedList)}>
          <div id="selected-value">
            <span>{selectedValue?.title}</span>
          </div>
          <div id="chevrons">
            <i className="fas fa-chevron-up"></i>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
        <div id="options" className={ isOpenedList ? "" : "display-none"}>
          { subjects.map(subject => {
            return <div key={subject.id}>
                      { (subjects[0] != subject) ? <div className="separator"></div> : <></> }
                      <div onClick={event => {
                        setSelectedValue(subject);
                        if (onSelect) {
                          onSelect(subject);
                        }
                        setListState(false);
                      }}>
                        <SubjectsListItem id={subject.id}>{subject.title}</SubjectsListItem>
                      </div>
                  </div>
          }) }
        </div>
      </div>
    );
}

export default SubjectsList;