import { Text, TextInput, View, StyleSheet, Button, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { Formik, Field } from "formik";
import * as yup from "yup";

import { useNavigation } from "@react-navigation/native";
/// CONTEXT
// import { useContext } from "react";
// import { StoreContext } from "../store/context";

/// REDUX
import { useDispatch } from "react-redux";
import { setNewUser } from '../store/redux/users';

import CustomInput from "./utils/input.custom";

export default function FormComp(){
    // const storeContext = useContext(StoreContext);
    const navigation = useNavigation();
    const dispatch = useDispatch();


    const loginValidationSchema = yup.object({
        email:yup
        .string()
        .email("Please enter valid email")
        .required("Email is required"),
        password:yup.
        string()
        .min(8,({min})=> `Password must be at least ${min} characters`)
        .required("Password is required"),
        age:yup
        .number()
        .required("Age is required"),
        message:yup
        .string()
        .required("Message is required"),
    })


    return(
        <KeyboardAvoidingView
            behavior={ Platform.OS === 'ios'?'padding':'position'}
            style={{flex:1}}
        >
        <ScrollView>
        <Formik
            initialValues={{email:'',password:'',age:'',message:''}}
            onSubmit={(values,{ resetForm, setErrors })=>{
                dispatch(setNewUser(values));
                setTimeout(()=>{
                    resetForm();
                    setErrors({})
                },1000)
                navigation.navigate('Home')
            }}
            validationSchema={loginValidationSchema}
        >
        { ({ handleSubmit })=> (
        <View>

            <Field
                component={CustomInput}
                name="email"
                placeholder="Enter your email"
                keyboardType="email-address"
            />

            <Field
                component={CustomInput}
                name="password"
                placeholder="Enter your password"
                secureTextEntry={true}
            />

            <Field
                component={CustomInput}
                name="age"
                placeholder="Enter your age"
                keyboardType="numeric"
            />

            <Field
                component={CustomInput}
                name="message"
                placeholder="Enter your message"
                multiline={true}
                numberOfLines={7}
            />

            <Button
                title="Submit"
                onPress={handleSubmit}
            />
        </View>
        )}
        </Formik>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

