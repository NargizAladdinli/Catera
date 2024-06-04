'use client'
import style from './_Formik.module.scss'
import { Form, Formik, useField, isSubmitting  } from "formik";
import * as Yup from 'yup'
import { FaArrowRightLong } from "react-icons/fa6";

const Formiks = () => {

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className={style.input}>
      <input className={meta.touched && meta.error ? style.err : ''}  {...field} {...props} placeholder={label}/>
      </div>
      {meta.touched && meta.error ? (
      <div className={style.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className={style.input}>
        <textarea className={meta.touched && meta.error ? style.err : ''}  {...field} {...props} cols="30" rows="10" placeholder={label}></textarea>
      {/* <input  {...field} {...props} placeholder={label}/> */}
      </div>
      {meta.touched && meta.error ? (
        <div className={style.error}>{meta.error}</div>
      ) : null}
    </>
  );
}

  return (
    <div className={style.formikl}>
        <h3>Leave your message</h3>
        <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        onSubmit={(values, {resetForm, setSubmitting }) => {

        sendForm(values).then(res => {

          console.log(res);
          console.log(values);
           resetForm();
          setSubmitting(false);

          console.log(isSubmitting);

        }

        );
        }}>
          <Form>
          <MyTextInput
                  id="name"
                  label="Your Name*"
                  name="name"
                  type="text"/>

                  <MyTextInput
                  id="phone"
                  label="Phone Number*"
                  name="phone"
                  type="tel"/>

                  <MyTextInput
                  id="email"
                  label="E-mail*"
                  name="email"
                  type="email"/>
                  
                  <MyTextArea
                  id="message"
                  label="Message"
                  name="message"
                  type="text"
                  />
                  <button type="submit"  disabled={isSubmitting}  className={`${style.button}`}>
                  REQUEST QUOTE{" "}   
                  <FaArrowRightLong/>
                  </button>
          </Form>

        </Formik>
    </div>
  );
};
export default Formiks;