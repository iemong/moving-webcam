import React from 'react'
import Button from '~/components/atoms/Button'
import Input from "~/components/atoms/Input";

const MAX_DEGREE = 180
const MIN_DEGREE = 0

const Home = (): JSX.Element => {
    const [value, setValue] = React.useState(90)
    const [currentObniz, setObniz] = React.useState<any>(null)
    const [servo, setServo] = React.useState<any>(null)

    React.useEffect(() => {
        // @ts-ignore
        const obniz = new Obniz(import.meta.env.VITE_OBNIZ_KEY);
        obniz.onconnect = async () => {
            const servo = obniz.wired("ServoMotor", {gnd:0, vcc:1, signal:2});
            servo.angle(90);
            setServo(servo)
            setObniz(obniz)
        }
    }, [])

    const handleClickLeft = () => {
        console.log('left')
        setValue((prevState => {
            const result = prevState -1
            return result < MIN_DEGREE ? prevState : result
        }))
    }

    const handleClickRight = () => {
        console.log('right')
        setValue((prevState => {
            const result = prevState + 1
            return result > MAX_DEGREE ? prevState : result
        }))
    }

    const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log('change', e.target.value)
        const num = Number(e.target.value)
        if(num > MAX_DEGREE || num < MIN_DEGREE) return
        setValue(num)
    }

    React.useEffect(() => {
        if(servo) {
            servo.angle(value)
        }
    }, [value, servo])

    return (
        <main className="h-full">
            <h1 className="text-center">Moving WebCam</h1>
            <p className="text-center">Servo Degree: {value}</p>
            <div className="flex justify-between max-w-md mx-auto">
                <Button onClick={handleClickLeft}>◀︎</Button>
                <Input type="number" value={String(value)} onChange={handleChangeInput} className="mx-2" />
                <Button onClick={handleClickRight}>▶︎</Button>
            </div>
        </main>
    )
}

export default Home
