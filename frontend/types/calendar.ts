/**
 * This file was automatically generated by simpleapp generator. Every
 * MODIFICATION OVERRIDE BY GENERATEOR
 * last change 2024-02-23
 * Author: Ks Tan
 */
  import { ForeignKey } from "./others"
  export type OffDay={
    _id:string
    date:Date
    title:string
  }
  export type DurationType  = keyof  {
    'hour':'hour',
    'month':'month',
    'day':'day',
    'minute':'minute'
  }  
  export type CalRightClickEvent = {
      class: string //"vuecal__cell--day5"
      content: number //16
      endDate: Date //Fri Feb 16 2024 23:59:59 GMT+0800 (Malaysia Time) {}
      formattedDate: string //"2024-02-16"
      outOfScope: boolean //false
      startDate: Date //Fri Feb 16 2024 00:00:00 GMT+0800 (Malaysia Time) {}
      today:  boolean //false
  }
  export type CalEventType<T> = {
    id: string //record _id
    start: Date|string //date or ISO8601 time string
    end: Date|string //date or ISO8601 time string
    class? : string //css class
    title: string
    content?: string //unuse at the moment
    split?: string //resource _id
    data?: T  // object/document data bind to event
   
    // unuse
    _eid?:string 
    startTimeMinutes?:number
    endTimeMinutes?:number  
  };
export type  RelocateEvent<T> = {
    event : CalEventType<T> // {_eid: '190_1', start: Thu Jan 25 2024 13:23:00 GMT+0800 (Malaysia Time), startTimeMinutes: 803, end: Thu Jan 25 2024 14:23:00 GMT+0800 (Malaysia Time), endTimeMinutes: 863, …}
    external : boolean
    newDate :  Date
    oldDate :  Date
    newSplit :  string
    oldSplit :  string
    originalEvent: CalEventType<T>
  }
export type CalResource = ForeignKey  & {  
    id?:string  //real id use by calendar, undefined will use _id
    hide?:boolean //default = false
    displayName: string; //use to display at calendar, undefine will use foreignkey label
    email?: string; //for generate avatar only
};
export type CalViewClickSlotEvent = {
  split:string
  date:Date
}

export type CalViewChange = {
  startDate: Date
  endDate:Date
  view:string
}