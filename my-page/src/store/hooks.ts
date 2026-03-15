import {type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Хук для dispatch с правильным типом
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Хук для selector с правильным типом состояния
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector