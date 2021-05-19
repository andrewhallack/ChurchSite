import React from 'react'
import { IFrame, IFrame2, IFrameContainer, InfoContainer } from './PageElements/InfoElements'

const Calendar = () => {
    return (
        <>
            <InfoContainer>
                <IFrameContainer>
                    <IFrame src="https://calendar.google.com/calendar/embed?src=andrewhallack%40gmail.com&ctz=America%2FChicago&amp;bgcolor=%23e2e2e2"></IFrame>
                </IFrameContainer>
                <IFrameContainer>
                    <IFrame2 src="https://calendar.google.com/calendar/embed?src=andrewhallack%40gmail.com&ctz=America%2FChicago&amp;bgcolor=%23e2e2e2&amp;mode=AGENDA"></IFrame2>
                </IFrameContainer>
            </InfoContainer>
        </>
    )
}

export default Calendar
