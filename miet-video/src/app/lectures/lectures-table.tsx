import LecturesTableItem from "./lectures-table-item";



const LecturesTable = () => {
    return (
        <div className="lectures-table-wrapper">
            <div className="lectures-table">
                <LecturesTableItem videoRef="/video" previewRef="/miet.png" title="Lecture 1" date="18 Feb 2024"/>
                <LecturesTableItem videoRef="/video" previewRef="/../favicon.ico" title="Lecture 2" date="18 Feb 2024"/>
                <LecturesTableItem videoRef="/video" previewRef="/../favicon.ico" title="Lecture 3" date="18 Feb 2024"/>
                <LecturesTableItem videoRef="/video" previewRef="/next.svg" title="Lecture 4" date="18 Feb 2024"/>
                <LecturesTableItem videoRef="/video" previewRef="/../favicon.ico" title="Lecture 5" date="18 Feb 2024"/>
                <LecturesTableItem videoRef="/video" previewRef="/not_found.png" title="Lecture 6" date="18 Feb 2024"/>
                <LecturesTableItem videoRef="/video" previewRef="/../favicon.ico" title="Lecture 7" date="18 Feb 2024"/>
                <LecturesTableItem videoRef="/video" previewRef="/vercel.svg" title="Lecture 8" date="18 Feb 2024"/>
                <LecturesTableItem videoRef="/video" previewRef="/../favicon.ico" title="Lecture 9" date="18 Feb 2024"/>
        </div>
        <div className="total-centralize-content no-more-video">
            <span>No lectures more</span>
        </div>
        </div>
    );
}

export default LecturesTable;