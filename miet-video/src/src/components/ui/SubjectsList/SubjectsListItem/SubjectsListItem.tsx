import { NextPage } from "next";

import "@/src/components/ui/SubjectsList/SubjectsListItem/SubjectsListItem.css";



const SubjectsListItem: NextPage<{id: string, children: Readonly<React.ReactNode>}> = ({ id, children }) => {
    return (
        <div className="option">
            <span className="label">{children}</span>
        </div>
    );
}

export default SubjectsListItem;