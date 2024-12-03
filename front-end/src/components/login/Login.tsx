"use client";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { InvisibleIcon } from "@/svg/InvisibleIcon";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";

export const Login = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setErrorMessage("");
      try {
        const response = await fetch(`${BACKEND_ENDPOINT}/api/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        console.log(response.status);

        if (response.ok) {
          toast.success("Login successful!");
          localStorage.setItem("isLoggedIn", "true");
          router.push("/");
          return;
        }

        if (response.status === 400) {
          toast.warning("Password or email not found");
          router.push("/");
        }
        if (response.status === 401) {
          toast.warning("Password not match. Try again");
          router.push("/");
        } else {
          setErrorMessage(data.message || "Invalid credentials");
          toast.error("Please sign up");
          router.push("/");
        }
      } catch (error) {
        setErrorMessage("Network error");
      }
    },
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    // if (isLoggedIn) {
    //   toast.success("you already login");
    //   router.push("/dashboard");
    // }
  }, [router]);

  return (
    <div className="w-full flex justify-center mt-[140px] mb-[180px]">
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="w-[448px] h-[549px] p-8 flex flex-col gap-[48px] items-center">
          <p className="text-[28px] font-[700] leading-[33.41px] ">Нэвтрэх</p>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-[400] leading-[16.71px]">Имэйл </p>
              <input
                className="px-4 py-2 rounded-[4px] border text-[16px] font-[400] leading-[19.09px] bg-[#F7F7F8]"
                placeholder="Имэйл хаягаа оруулна уу"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-[400] leading-[16.71px]">
                Нууц үг
              </p>
              <div className="flex justify-between bg-[#F7F7F8] border px-4 py-2 ">
                <input
                  className="w-[400px] rounded-[4px]  text-[16px] font-[400] leading-[19.09px] bg-[#F7F7F8]"
                  placeholder="Нууц үг"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <InvisibleIcon />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full items-center">
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-[4px] text-[16px] font-[400] leading-[19.09px] text-[#1C20243D] bg-[#EEEFF2]"
            >
              Нэвтрэх
            </button>
            <p className="text-[14px] font-[400] leading-[16.71px]">Эсвэл</p>
            <Link
              href={"./signup"}
              className="w-full px-4 py-2 rounded-[4px] text-[16px] font-[400] leading-[19.09px] border border-[#18BA51]"
            >
              Бүртгүүлэх
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
