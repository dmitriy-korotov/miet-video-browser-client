import { NextPage } from "next";

import "@/src/components/ui/FormComponents/FormWrapper/FormWrapper.css";



const FormWrapper: NextPage<{ formTitle: string, children: Readonly<React.ReactNode>}> = ({ formTitle, children }) => {
    return (
        <form method="POST">
            <div className="form-wrapper">
                <div className="form-title"><span>{formTitle}</span></div>
                {children}
            </div>
        </form>
    );
}

export default FormWrapper;