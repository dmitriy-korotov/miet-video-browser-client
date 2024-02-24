import LecturesTableItem from "./lectures-table-item";



const LecturesTable = () => {
    return (
        <div className="lectures-table">
            <LecturesTableItem videoRef="/player" previewRef="/../favicon.ico" title="Lecture 1" date="18 Feb 2024"/>
            <LecturesTableItem videoRef="/player" previewRef="/../favicon.ico" title="Lecture 2" date="18 Feb 2024"/>
            <LecturesTableItem videoRef="/player" previewRef="/../favicon.ico" title="Lecture 3" date="18 Feb 2024"/>
            <LecturesTableItem videoRef="/player" previewRef="/../favicon.ico" title="Lecture 4" date="18 Feb 2024"/>
            <LecturesTableItem videoRef="/player" previewRef="/../favicon.ico" title="Lecture 5" date="18 Feb 2024"/>
            <LecturesTableItem videoRef="/player" previewRef="/../favicon.ico" title="Lecture 6" date="18 Feb 2024"/>
            <LecturesTableItem videoRef="/player" previewRef="/../favicon.ico" title="Lecture 7" date="18 Feb 2024"/>
            <LecturesTableItem videoRef="/player" previewRef="/../favicon.ico" title="Lecture 8" date="18 Feb 2024"/>
            <LecturesTableItem videoRef="/player" previewRef="/../favicon.ico" title="Lecture 9" date="18 Feb 2024"/>
        </div>
    );
}

export default LecturesTable;