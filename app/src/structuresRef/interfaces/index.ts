/**
 * This file contains the the interface definitions
 * for the database classes
 */
export interface DBConnector {
	Connect(): void
}

export interface DBWriter extends DBConnector {
	Save(params: any): any
	Update(params: any): any
}

export interface DBReader extends DBConnector {
	FetchOne(id: any): any
	FetchList(params: any): any
}
