/**
 * This file was automatically generated by simpleapp generator. Every
 * MODIFICATION OVERRIDE BY GENERATEOR
 * last change 2024-04-15
 * Author: Ks Tan
 */
import { Component } from 'vue';
import {Notification} from './notifications'
import { SimpleAppClient } from '~/simpleapp/generate/clients/SimpleAppClient';
import { FormCrudEvent } from './simpleappinput';
import { SimpleAppDocumentType } from './documentlist';
export type ViewRecord = {
    _id: string    
    eventId:string
    label:string
    documentName: SimpleAppDocumentType
    viewer?: any 
    readonly?:boolean    
    paras?:any
    after?: (eventType:FormCrudEvent,data:any )=>void
    document?:SimpleAppClient<any,any>
}
export type RefreshDocumentList ={
    documentName : SimpleAppDocumentType,
    data?:any
}
export type EventType ={
    'Notification' :Notification
    'Decision' :Notification
    //special programming events
    'InvitationAccepted' :string
    'InvitationRejected' :string
    'RefreshUser' :string
    'RefreshDocument': string
    'RefreshDocumentList': RefreshDocumentList
    'ViewRecord': ViewRecord
    'SessionExpire': string
    'CloseDialog': string
    'pickGroup':string
    'HoldScreen':boolean
}