export interface EmailMessage {
  to: string,
  message: string
}

export interface SmsMessage {
  phoneNumber: string,
  message: string,
  hourReception: Date
}

export interface PushMessage {
  deviceToken: string,
  message: string
}

export interface WhatsAppMessage {
    phoneNumber: string,
    message: string,
}

