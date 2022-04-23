import { renderHook,act } from "@testing-library/react-hooks";
import {useCounter} from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {

    test('debe retornar valores por defecto', () => {
        const { result} = renderHook(() => useCounter());
        //result.current: contiene el un valor(counter) y tres funciones mas.
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('debe tener counter valor por defecto de 100', () => {

        const { result} = renderHook(() => useCounter(100));
        //result.current: contiene el un valor(counter) y tres funciones mas.
        expect(result.current.counter).toBe(100);
   
    });

    test('debe de incremetar el counter en 1', () => {

        const { result} = renderHook(() => useCounter(55));
        const {increment}= result.current;
        act(()=>{
            increment();
        
        });

        const {counter}= result.current;
        expect(counter).toBe(56);
    });

    test('debe de decremetar el counter en 1', () => {

        const { result} = renderHook(() => useCounter(20));
        const {decrement}= result.current;
        act(()=>{
            decrement();
            //reset();
        });

        const {counter}= result.current;
        expect(counter).toBe(19);
    });

    test('debe de resetear el valor por defecto de counter', () => {

        const { result} = renderHook(() => useCounter(15));
        const {increment,reset}= result.current;
        act(()=>{
            increment();
            reset();
        });

        const {counter}= result.current;
        expect(counter).toBe(15);
    });

});