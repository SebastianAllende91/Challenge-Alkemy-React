import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Field, Form } from "react-final-form";
import { login } from "../../actions/loginAction";
import AuthServices from "../../service/login.service";
import { required, email, joinValidations } from "../../utils/validations";
import Swal from "sweetalert2";
import "./styles.css";
import { useHistory } from "react-router-dom";

const Formulario = () => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modifiedForm, setModifiedForm] = useState(false);
  const history = useHistory();

  const onSubmit = useCallback(
    (data) =>
      new Promise(() => {
        setIsSubmitting(true);
        AuthServices.login({
          email: data.Email,
          password: data.Password,
        })
          .then((response) => {
            if (response.data) {
              setIsSubmitting(false);
              dispatch(login(response.data.token, true));
              history.push("app/home");
            } else {
              setIsSubmitting(false);
              Swal.fire({
                title: "Error",
                text: `${response}`,
                icon: "error",
              });
            }
          })
          .catch((error) => {
            setIsSubmitting(false);
            Swal.fire({
              title: "Error",
              text: `${error}`,
              icon: "error",
            });
          });
      }),
    [dispatch, history]
  );

  return (
    <div className="container-sm mt-5">
      <div>
        <h2 className="text-center">Bienvenido</h2>
      </div>
      <div className="formBody">
        <Form
          initialValues={{
            Email: "",
            Password: "",
          }}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, valid, pristine, values }) => {
            if (!pristine && !pristine !== modifiedForm) {
              setModifiedForm(!pristine);
            }
            return (
              <form onSubmit={handleSubmit} id="form">
                <Field
                  name="Email"
                  validate={joinValidations([required, email])}
                >
                  {(props) => (
                    <div>
                      <label id="label" className="label-text">
                        Email
                      </label>
                      <input id="input one" type="text" {...props.input} />
                      {props.meta.error &&
                        props.meta.touched &&
                        props.meta.invalid && (
                          <span>
                            {props.meta.error === "emailValidation"
                              ? `Formato Incorrecto`
                              : `Campo Requerido`}
                          </span>
                        )}
                    </div>
                  )}
                </Field>
                <Field name="Password" validate={required}>
                  {(props) => (
                    <div>
                      <label id="label" className="label-text">
                        Password
                      </label>
                      <input id="input two" type="password" {...props.input} />
                      {props.meta.error &&
                        props.meta.touched &&
                        props.meta.invalid && <span>Campo Requerido</span>}
                    </div>
                  )}
                </Field>

                <div>
                  <button
                    id="btnLogin"
                    disabled={!valid || isSubmitting}
                    onClick={handleSubmit}
                  >
                    Aceptar
                  </button>
                </div>
                {/* <pre>{JSON.stringify(values, 0, 4)}</pre> */}
              </form>
            );
          }}
        </Form>
      </div>
    </div>
  );
};

export default Formulario;
