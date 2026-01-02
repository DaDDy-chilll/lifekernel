import { useContext } from "react";
import { ColorContext } from "../provider";

export const useColors = () => useContext(ColorContext);