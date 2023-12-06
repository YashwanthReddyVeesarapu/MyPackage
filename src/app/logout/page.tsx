"use client";

import { clearData, logoutUser } from "@/redux/actions/actions";
import { getAuth } from "firebase/auth";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const LogoutPage = () => {
  const auth = getAuth();
  const dispatch = useDispatch();

  dispatch(clearData());
  dispatch(logoutUser());
  auth.signOut();
  redirect("/login");
};

export default LogoutPage;
