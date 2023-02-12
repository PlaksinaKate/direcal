import { SyntheticEvent } from "react";
import ApiCalendar from "react-google-calendar-api";

const googleConfig = {
  "clientId":`${process.env.NEXT_PUBLIC_CLIENT_ID}`,
  "apiKey": `${process.env.NEXT_PUBLIC_API_KEY}`,
  "scope": "https://www.googleapis.com/auth/calendar",
  "discoveryDocs": [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
}

const apiCalendar = new ApiCalendar(googleConfig)


export default function Home() {
  function handleItemClick(event: SyntheticEvent<any>, name: string): void {
    if (name === 'sign-in') {
      apiCalendar.handleAuthClick()
    } else if (name === 'sign-out') {
      apiCalendar.handleSignoutClick();
    }
  }


  return (
    <>
      <button
        onClick={(e) => handleItemClick(e, 'sign-in')}
      >
        sign-in
      </button>
      <button
        onClick={(e) => handleItemClick(e, 'sign-out')}
      >
        sign-out
      </button>
    </>
  )
}