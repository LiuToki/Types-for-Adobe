/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />

type NumericalBool = 0 | 1;
type MediaType = "Video" | "Audio" | "any";
type SampleRateOption = 48000 | 96000;
type BitsPerSampleOption = 16 | 24;
type SDKEventType = "warning" | "info" | "error";

/**
 *
 */
declare class CsxsResourceCentral {
	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	getBrightness(): string

	/**
	 *
	 */
	openURL(urlString: string): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void

	/**
	 *
	 */
	validateClient(token: string): boolean
}

/**
 *
 */
declare class Csxs {
	/**
	 *
	 */
	readonly resourceCentral: CsxsResourceCentral

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 * TODO: Check this class. I am exhausted.
 */
declare class Application {
	/**
	 *
	 */
	readonly anywhere: Anywhere

	/**
	 *
	 */
	readonly build: string

	/**
	 *
	 */
	readonly csxs: Csxs

	/**
	 *
	 */
	readonly encoder: Encoder
	
	/**
	 *
	 */
	readonly projectManager: ProjectManager

	/**
	 *
	 */
	readonly getAppPrefPath: string

	/**
	 *
	 */
	readonly getAppSystemPrefPath: string

	/**
	 *
	 */
	readonly getPProPrefPath: string

	/**
	 *
	 */
	readonly getPProSystemPrefPath: string

	/**
	 *
	 */
	readonly metadata: Metadata

	/**
	 * This is the current active project.
	 */
	project: Project

	/**
	 *
	 */
	readonly projects: ProjectCollection

	/**
	 *
	 */
	readonly properties: Properties

	/**
	 *
	 */
	readonly sourceMonitor: SourceMonitor

	/**
	 *
	 */
	readonly userGuid: string

	/**
	 *
	 */
	readonly version: string

	/**
	 *
	 */
	broadcastPrefsChanged(preferencesThatChanged: string): boolean

	/**
	 *
	 */
	getEnableProxies(): number

	/**
	 * Checks whether file specified is a doc
	 * @param filePath This is the path to be checked
	 * @returns true if the document at that path is openable as a PPro project
	 */
	isDocument(filePath: string): boolean

	/**
	 *
	 */
	isDocumentOpen(): boolean

	/**
	 *
	 */
	openDocument(filePath: string, bypassConversionDialog?: boolean, bypassLocateFile?: boolean, bypassWarningDialog?: boolean, hideFromMRUList?: boolean): boolean

	/**
	 * @param newValueForTranscodeOnIngest
	 * @returns the newly-set state for whether or not PPro transcodes files upon ingest.
	 * TODO: Dont use any.
	 */
	setEnableTranscodeOnIngest(newValueForTranscodeOnIngest: boolean): any  

	/**
	 *
	 */
	openFCPXML(): boolean

	/**
	 *
	 */
	quit(): void

	/**
	 *
	 */
	setEnableProxies(enable: number): boolean

	/**
	 *
	 */
	setExtensionPersistent(extensionID: string, state?: number): void

	/**
	 *
	 */
	setSDKEventMessage(value: string, eventType: string): boolean

	/**
	 *
	 */
	setScratchDiskPath(value: string, type: string): boolean

	/**
	 *
	 */
	getProjectViewIDs(): Array<number>

	/**
	 *
	 */
	getProjectFromViewID(viewID: string): Project

	/**
	 *
	 */
	showCursor(enable: boolean): void
	
	/**
	 *
	 */
	getProjectViewSelection(viewID: string): Array<ProjectItem>

	/**
	 *
	 */
	setProjectViewSelection(projectItems:Array<ProjectItem>, viewID: string): void

	/**
	 *
	 */
	onItemAddedToProjectSuccess : undefined


	/**
	 * @returns an array of the names of all available workspaces.
	 */
	getWorkspaces(): Array<string>

	/**
	 * @param workspaceName Name of workspace to use
	 * @returns true if successful
	 */
	setWorkspace(workspaceName: string): boolean

	/**
	 * 
	 * @param eventName event to which to subscribe
	 * @param function_ function to be called 
	 */
	addEventListener(eventName: string, function_: any): void

	/**
	 *
	 */
	trace(message: string): void

	/**
	 *
	 */
	enableQE(): void

	/**
	 * 
	 */
	newProject(projectName: string): boolean

	/**
	 * 
	 */
	production: PrProduction

	/**
	 * 
	 */
	openPrProduction(path:string): PrProduction

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

// GENERAL.

/**
 *
 */
declare class Anywhere {
	/**
	 *
	 */
	getAuthenticationToken(): string

	/**
	 *
	 */
	getCurrentEditingSessionActiveSequenceURL(): string

	/**
	 *
	 */
	getCurrentEditingSessionSelectionURL(): string

	/**
	 *
	 */
	getCurrentEditingSessionURL(): string

	/**
	 *
	 */
	isProductionOpen(): boolean

	/**
	 * TODO: What is return.
	 */
	listProductions(): RemoteProductionCollection

	/**
	 * @returns 0 if successful.
	 */
	openProduction(inProductionURL: string): number

	/**
	 * @description Logs the specified email address into the server, using the provided token.
	 * @returns 0 if successful.
	 */
	setAuthenticationToken(inAuthToken: string, inEmail: string): number

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 *
 */
declare class Encoder {
	/**
	 *
	 */
	readonly ENCODE_ENTIRE: number

	/**
	 *
	 */
	readonly ENCODE_IN_TO_OUT: number

	/**
	 *
	 */
	readonly ENCODE_WORKAREA: number

	/**
	 *
	 */
	encodeFile(
		inputFilePath: string,
		outputFilePath: string,
		presetPath: string,
		removeOnCompletion?: number,
		startTime?: object,
		stopTime?: object,
	): string

	/**
	 *
	 */
	encodeProjectItem(
		projectItem: ProjectItem,
		outputFilePath: string,
		presetPath: string,
		WorkAreaType?: number,
		removeOnCompletion?: number,
	): string

	/**
	 *
	 */
	encodeSequence(
		sequence: Sequence,
		outputFilePath: string,
		presetPath: string,
		WorkAreaType?: number,
		removeOnCompletion?: number,
	): string

	/**
	 * TODO: Dont use any.
	 */
	getExporters(): Array<any>

	/**
	 *
	 */
	launchEncoder(): boolean

	/**
	 * @returns 0 if successful.
	 */
	setEmbeddedXMPEnabled(enable: NumericalBool): number

	/**
	 * @returns 0 if successful.
	 */
	setSidecarXMPEnabled(enable: NumericalBool): number

	/**
	 * @description Makes Adobe Media Encoder start rendering its render queue.
	 * @returns 0 if successful.
	 */
	startBatch(): number

	/**
	 * 
	 */
	lastExportMediaFolder(): string

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 *
 */
declare class Marker {
	/**
	 *
	 */
	comments: string

	/**
	 *
	 */
	end: Time

	/**
	 *
	 */
	readonly guid: string

	/**
	 *
	 */
	name: string

	/**
	 *
	 */
	start: Time

	/**
	 *
	 */
	readonly type: string

	/**
	 * @description Gets the marker color index.
	 * @returns the color index as an Integer.
	 */
	getColorByIndex(index: number): number

	/**
	 * @description Retrieves the frame target, from the marker’s FrameTarget field.
	 * @returns a String containing the URL, or 0 if unsuccessful.
	 */
	getWebLinkFrameTarget(): string

	/**
	 * @description Retrieves the URL, from the marker’s URL field.
	 * @returns a String containing the URL, or 0 if unsuccessful.
	 */
	getWebLinkURL(): string

	/**
	 * @description Sets the marker color by index. Color indexies listed below.
	 * 0 = Green
	 * 1 = Red
	 * 2 = Purple
	 * 3 = Orange
	 * 4 = Yellow
	 * 5 = White
	 * 6 = Blue
	 * 7 = Cyan
	 */
	setColorByIndex(colorIndex: number, markerIndex: number): undefined

	/**
	 * @description Sets the type of the marker to “Chapter”.
	 * @returns 0 if successful.
	 */
	setTypeAsChapter(): number

	/**
	 * @description Sets the type of the marker to “Comment”.
	 * @returns 0 if successful.
	 */
	setTypeAsComment(): number

	/**
	 * @description Sets the type of the marker to “Segmentation”.
	 * @returns 0 if successful.
	 */
	setTypeAsSegmentation(): number

	/**
	 * FIXME: Differ sample and document. This is from sample.
	 * @returns 0 if successful.
	 */
	setTypeAsWebLink(url: string, frameTarget: string): number

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 *
 */
declare class Metadata {
	/**
	 *
	 */
	readonly getMetadata: string

	/**
	 *
	 */
	addMarker(): void

	/**
	 *
	 */
	deleteMarker(): void

	/**
	 *
	 */
	setMarkerData(): void

	/**
	 *
	 */
	setMetadataValue(): void

	/**
	 *
	 */
	updateMarker(): void

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 * The currently production.
 */
declare class PrProduction {
	/**
	 * 
	 */
	name: string

	/**
	 * @description The path to the Production folder.
	 */
	path: string

	/**
	 * FIXME:
	 */
	readonly projects: Array<ProjectItem>

	/**
	 * 
	 */
	addProject(srcProjectPath: string, destProjectPath: string): boolean

	/**
	 * 
	 */
	close(): boolean

	/**
	 * 
	 */
	getLocked(project:Project): boolean

	/**
	 * 
	 */
	moveToTrash(projectPath: string, suppressUI: boolean, saveProject: boolean): boolean

	/**
	 * 
	 */
	setLocked(newLockState: boolean): boolean
}

/**
 * The servers production.
 * FIXME:
 */
declare class RemoteProduction {
	/**
	 *
	 */
	readonly description: string

	/**
	 *
	 */
	readonly name: string

	/**
	 *
	 */
	readonly url: string

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 *
 */
declare class Project {
	/**
	 *
	 */
	activeSequence: Sequence

	/**
	 *
	 */
	readonly documentID: string

	/**
	 *
	 */
	readonly name: string

	/**
	 *
	 */
	readonly path: string

	/**
	 *
	 */
	readonly rootItem: ProjectItem

	/**
	 *
	 */
	readonly sequences: SequenceCollection

	/**
	 *
	 */
	addPropertyToProjectMetadataSchema(name: string, label: string, type: number): boolean

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	closeDocument(): boolean

	/**
	 *
	 */
	createNewSequence(sequenceName: string, placeholderID: string): void

	/**
	 *
	 */
	deleteAsset(): void

	/**
	 *
	 */
	deleteSequence(sequence: Sequence): boolean

	/**
	 *
	 */
	exportAAF(
	sequence: Sequence,
	filePath: string,
	mixDownVideo: number,
	explodeToMono: number,
	sampleRate: number,
	bitsPerSample: number,
	embedAudio: number,
	audioFileFormat: number,
	trimSources: number,
	handleFrames: number,
	): number

	/**
	 *
	 */
	exportFinalCutProXML(exportPath: string, suppressUI: number): boolean
	
	/**
	 *
	 */
	consolidateDuplicates(): void

	/**
	 *
	 */
	exportOMF(
	sequence: Sequence,
	filePath: string,
	OMFTitle: string,
	sampleRate: number,
	bitsPerSample: number,
	audioEncapsulated: number,
	audioFileFormat: number,
	trimAudioFiles: number,
	handleFrames: number,
	includePan: number,
	): number

	/**
	 *
	 */
	exportTimeline(exportControllerName: string): number

	/**
	 *
	 */
	getInsertionBin(): ProjectItem

	/**
	 *
	 */
	getProjectPanelMetadata(): string

	/**
	 *
	 */
	importAEComps(aepPath: string, compsToImport: Array<string>, projectBin: ProjectItem): boolean

	/**
	 * @returns 0 if successful.
	 */
	importAllAEComps(aepPath: string, projectBin: ProjectItem): boolean

	/**
	 * Imports files into the project. 
	 * @param arrayOfFilePathsToImport An array of paths to files to import
	 * @param suppressUI optional; if true, suppress any warnings, translation reports, or errors.
	 * @param projectBin optional; if present, the bin into which to import the new media.
	 * @param importAsNumberedStill optiona; if present, interprets the file paths as a series of numbered stills.
	 */
	importFiles(arrayOfFilePathsToImport: string[], suppressUI?: boolean, projectBin?: ProjectItem, importAsNumberedStill?: boolean): boolean

	/**
	 * Imports sequences from a project.
	 * @param projectPath Path to project from which to import sequences.
	 * @param sequences An array of sequence IDs to import, from the project.
	 * @returns 0 if successful.
	 */
	 importSequences(projectPath: string, sequencesToImport: Array<number>): boolean

	/**
	 *
	 */
	openSequence(sequenceID: string): boolean

	/**
	 *
	 */
	pauseGrowing(pausedOrNot: number): boolean

	/**
	 *
	 */
	placeAsset(arg1: any): boolean

	/**
	 *
	 */
	save(): void

	/**
	 *
	 */
	saveAs(saveAsPath: string): boolean

	/**
	 * @returns 0 if unsuccessful.
	 */
	 setProjectPanelMetadata(newMetadata: string): boolean

	/**
	 * 
	 * @param newSequenceName 	Name for newly-created sequence
	 * @param projectItems 		Array of project items to be added to sequence
	 * @param targetBin 		Bin in which new sequence should be created
	 */
	
	createNewSequenceFromClips(newSequenceName: string, projectItems: Array<ProjectItem>, targetBin: ProjectItem): Sequence

	/**
	 * 
	 */
	getSupportedGraphicsWhiteLuminances(): Array<string>

	/**
	 * 
	 */
	getGraphicsWhiteLuminance(): number

	/**
	 * 
	 * @param newGWL  
	 */
	setGraphicsWhiteLuminance(newGWL:number): boolean

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}


/**
 * Structure containing all available options for the `ProjectManager`.
 */
declare class ProjectManagerOptions {

	/**
	 * Transfer mode setting: Copy source media
	 */
	readonly CLIP_TRANSFER_COPY: "string"

	/**
	 * Transfer mode setting: Transcode source media
	 */
	readonly CLIP_TRANSFER_TRANSCODE: string

	/**
	 * Transcode mode setting: Transcode source media to a specific preset
	 */
	readonly CLIP_TRANSCODE_MATCH_PRESET: string

	/**
	 * Transcode mode setting: Transcode source media to match clips
	 */
	readonly CLIP_TRANSCODE_MATCH_CLIPS: string

	/**
	 * Transcode mode setting: Transcode source media to match sequence settings
	 */
	readonly CLIP_TRANSCODE_MATCH_SEQUENCE: string

	/**
	 * An `Array` of all sequences affected by the transfer.
	 */
	affectedSequences : Array<Sequence>

	/**
	 * Which transcode option to use; will be one of these:
	 * 	`CLIP_TRANSCODE_MATCH_PRESET`
	 *  `CLIP_TRANSCODE_MATCH_CLIPS`
	 * 	`CLIP_TRANSCODE_MATCH_SEQUENCE`
	 */
	clipTranscoderOption: string

	/**
	 * Which transfer option to use; will be one of these:
	 * 	`CLIP_TRANSFER_COPY`
	 *  `CLIP_TRANSFER_TRANSCODE`
	 */
	clipTransferOption: string
	
	/**
	 * If `true`, After Effects compositions will be transcoded.
	 */
	convertAECompsToClips : boolean

	/**
	 * If `true`, image sequences will be transcoded.
	 */
	convertImageSequencesToClips : boolean

	/**
	 * If `true`, synthetic importer clips will be transcoded.
	 */
	convertSyntheticsToClips : boolean

	/**
	 * If `true`, source media will be copied not transcoded, if transcoding would have resulted in loss of alpha information.
	 */
	copyToPreventAlphaLoss : boolean

	/**
	 * The containing directory for the consolidation/transfer.
	 */
	destinationPath : string

	/**
	 * Path the the encoder preset (.epr file) to be used.
	 */
	encoderPresetFilePath : string
	
	/**
	 * If `true`, projectItems not used in a sequence are not transferred
	 */
	excludeUnused : boolean

	/**
	 * The number of 'handle' frames to provide, before and after the in/out points of clips in the sequence.
	 */
	handleFrameCount : number

	/**
	 * If `true`, all sequences in the project will be transferred.
	 */
	includeAllSequences : boolean
	
	/**
	 * If `true`, conformed audio files will also be transferred.
	 */
	includeConformedAudio : boolean

	/**
	 * If `true`, preview files will also be transferred.
	 */
	includePreviews : boolean

	/**
	 * If `true`, media files will be renamed to match clip names.
	 */
	renameMedia : boolean
}

/**
 * 
 */
declare class ProjectManager {

	/**
	 * An array of strings describing errors encountered.
	 */
	errors : Array<string>

	/**
	 * The `ProjectManagerOptions` structure.
	 */
	options : ProjectManagerOptions

	/**
	 * Perform the consolidation and transfer.
	 * @param project the `Project` to consolidate.
	 */
	process(project:Project): number

	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 *
 */
declare class Properties {
	/**
	 * TODO: Code from sample. If documentation update, Check it.
	 */
	clearProperty(propertyKey: string): void

	/**
	 * @description Checks whether a given property exists in preferences.
	 * TODO: Change example javascript to typescript.
	 * 
	 * Example
	 * 
	 * Check whether labels with indices 10 and 99 exist in preferences:
	 * ```
	 * var property = 'BE.Prefs.LabelNames.10';
	 * var exists = app.properties.doesPropertyExist(property);
	 * alert('Property "' + property + '" exists: ' + exists.toString());
	 * 
	 * property = 'BE.Prefs.LabelNames.99';
	 * exists = app.properties.doesPropertyExist(property);
	 * alert('Property "' + property + '" exists: ' + exists.toString());
	 * ```
	 */
	doesPropertyExist(propertyKey: string): boolean

	/**
	 * @description Returns a property value.
	 * TODO: Change example javascript to typescript.
	 * 
	 * Example
	 * 
	 * Get label name at a given index:
	 * ```javascript
	 * var labelIndex = 0;
	 * var property = 'BE.Prefs.LabelNames.' + labelIndex;
	 * 
	 * if (app.properties.doesPropertyExist(property)) {
	 *     alert(app.properties.getProperty(property));
	 * } else {
	 *     alert('Property "' + property + '" does not exist');
	 * }
	 * ```
	 */
	getProperty(propertyKey: string): string

	/**
	 *
	 */
	isPropertyReadOnly(propertyKey: string): boolean

	/**
	 * @description Set property value.
	 * TODO: Change example javascript to typescript.
	 * 
	 * Example
	 * 
	 * Change label name:
	 * ```javascript
	 * var labelIndex = 0;
	 * var property = 'BE.Prefs.LabelNamesX.' + labelIndex;
	 * 
	 * var newValue = 'Changed via Script';
	 * var persistent = true;
	 * var createIfNotExist = true;
	 * 
	 * if (app.properties.doesPropertyExist(property)) {
	 *     if (app.properties.isPropertyReadOnly(property)) {
	 *         alert('Could not rename property "' + property + '" because it is read-only.');
	 *     } else {
 	 *        var oldValue = app.properties.getProperty(property);
 	 *        app.properties.setProperty(property, newValue, persistent, createIfNotExist);
 	 *        alert('Value changed from "' + oldValue + '" to "' + newValue + '"');
	 *     }
	 * } else {
	 *     app.properties.setProperty(property, newValue, persistent, createIfNotExist);
	 *     alert('Created new property "' + property + '" with value "' + newValue + '"');
	 * }
	 * ```
	 */
	setProperty(propertyKey: string, propertyValue: any, permanenceValue: boolean, allowCreateNewProperty: boolean): void

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 *
 */
declare class SourceMonitor {
	/**
	 * @description Closes all clips in the Source monitor.
	 * @returns 0 if successful.
	 */
	closeAllClips(): number

	/**
	 * @description Closes the front-most clip in the Source monitor.
	 * @returns 0 if successful.
	 */
	closeClip(): number

	/**
	 * @description Retrieves the position of the Source monitor’s current time indicator.
	 * @returns a Time object containing the position of the Source monitor’s current time indicator.
	 */
	getPosition(): Time

	/**
	 * @description Open a file in the Source monitor.
	 * @returns true if successful.
	 */
	openFilePath(path: string): boolean

	/**
	 * @description Open a project item in the Source monitor.
	 * @returns 0 if successful.
	 */
	openProjectItem(projectItem: ProjectItem): number

	/**
	 * @description Begins playing back the Source monitor, at the specified playback speed.
	 * @returns 0 if successful.
	 */
	play(speed?: number): number

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

// ITEM.

/**
 *
 */
declare class ProjectItemType {
	/**
	 *
	 */
	static readonly BIN: number

	/**
	 *
	 */
	static readonly CLIP: number

	/**
	 *
	 */
	static readonly FILE: number

	/**
	 *
	 */
	static readonly ROOT: number

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 * Structure containing footage interpretation.
 * TODO: dont use any.
 */	
declare class FootageInterpretation {
	/**
	 * Alpha, will be one of the following:
	 * `0 ALPHACHANNEL_NONE`
	 * `1 ALPHACHANNEL_STRAIGHT`
	 * `2 ALPHACHANNEL_PREMULTIPLIED`
	 * `3 ALPHACHANNEL_IGNORE`
	 */
	alphaUsage:					0 | 1 | 2 | 3
	
	/**
	 * Field type, one of the following:
	 * `-1 FIELDTYPE_DEFAULT`
	 * `0 FIELDTYPE_PROGRESSIVE`
	 * `1 FIELDTYPE_UPPERFIRST`
	 * `2 FIELDTYPE_LOWERFIRST`
	 */
	fieldType:					-1 | 0 | 1 | 2

	/**
	 * true or false.
	 */
	ignoreAlpha:				boolean

	/**
	 * true or false.
	 */
	invertAlpha:				boolean

	/**
	 * Frame rate as floating point value.
	 */
	frameRate:					number

	/**
	 * Pixel aspect ratio as floating point value.
	 */
	pixelAspectRatio:			number

	/**
	 * true or false.
	 */
	removePulldown:				boolean

	/**
	 * The projection type in use, for VR footage. One of these:
	 * `0 VR_CONFORM_PROJECTION_NONE`
	 * `1 VR_CONFORM_PROJECTION_EQUIRECTANGULAR`
	 */
	vrConformProjectionType:	0 | 1

	/**
	 * The layout of footage in use, for VR. One of these:
	 * `0 VR_LAYOUT_MONOSCOPIC`
	 * `1 VR_LAYOUT_STEREO_OVER_UNDER`
	 * `2 VR_LAYOUT_STEREO_SIDE_BY_SIDE`
	 */
	vrLayoutType:				0 | 1 | 2

	/**
	 * The horizontal view in use, for VR footage.
	 */
	vrHorizontalView:			any

	/**
	 * The vertical view in use, for VR footage.
	 */
	vrVerticalView:				any
}
	
/**
 *
 */
declare class ProjectItem {
	/**
	 *
	 */
	readonly children: ProjectItemCollection

	/**
	 * TODO: readonly or not?
	 */
	getAudioChannelMapping: AudioChannelMapping

	/**
	 * TODO: readonly or not?
	 * @returns JSON object.
	 */
	getOverrideColorSpaceList: string
	
	/**
	 *
	 */
	name: string
	
	/**
	 *
	 */
	readonly nodeId: string
	
	/**
	 *
	 */
	readonly teamProjectsAssetId: string
	
	/**
	 *
	 */
	readonly treePath: string
	
	/**
	 *
	 */
	readonly type: number
	
	/**
	 * @returns 0 if successful.
	 */
	attachProxy(mediaPath: string, isHiRes: number): number

	/**
	 * 
	 */
	detachProxy(): boolean
	
	/**
	 *
	 */
	canChangeMediaPath(): boolean
	
	/**
	 * @returns true if the project item permits a proxy to be attached; false if not.
	 */
	canProxy(): boolean
	
	/**
	 *
	 */
	changeMediaPath(mediaPath: string, suppressWarnings: boolean): boolean

	/**
	 * Clears any assigned out point; the project item will then start at startTime.
	 * @returns 0 if successful.
	 */
	clearOutPoint(): number
	
	/**
	 *
	 */
	createBin(name: string): ProjectItem
	
	/**
	 * @returns 0 if creation if smart bin was successful.
	 */
	createSmartBin(name: string, query: string): number
	
	/**
	 * @returns a project item representing the new subclip, or 0 if creation failed.
	 */
	createSubClip(
		name: string,
		startTime: string,
		endTime: string,
		hasHardBoundaries: number,
		takeVideo?: number,
		takeAudio?: number,
	): ProjectItem
	
	/**
	 * @eturns 0 if deletion was successful.
	 */
	deleteBin(): number
	
	/**
	 * @eturns an array of project items, or 0 if no project items matching the matchPath were found.
	 */
	findItemsMatchingMediaPath(matchString: string, ignoreSubclips?: number): Array<ProjectItem>
	
	/**
	 * @returns number, one of following.
	 * 0 = Violet
	 * 1 = Iris
	 * 2 = Caribbean
	 * 3 = Lavender
	 * 4 = Cerulean
	 * 5 = Forest
	 * 6 = Rose
	 * 7 = Mango
	 * 8 = Purple
	 * 9 = Blue
	 * 10 = Teal
	 * 11 = Magenta
	 * 12 = Tan
	 * 13 = Green
	 * 14 = Brown
	 * 15 = Yellow
	 */
	getColorLabel(): number

	/**
	 * Returns a structure describing the current interpretation of the projectItem.
	 * @returns A footage interpretation structure, or 0 if unsuccessful.
	 */
	getFootageInterpretation(): FootageInterpretation

	/**
	 * @returns A Time object, containing the in point.
	 */
	getInPoint(): Time
	
	/**
	 *
	 */
	getMarkers(): MarkerCollection
	
	/**
	 *
	 */
	getMediaPath(): string

	/**
	 * Retrieves the current out point for specified media type.
	 * @param mediaType Pass 1 for video only, or 2 for audio only. If no mediaType is passed, function gets the out point for all media.
	 * @returns a Time object.
	 */
	getOutPoint(mediaType: number): Time
	
	/**
	 *
	 */
	getProjectMetadata(): string
	
	/**
	 *
	 */
	getProxyPath(): string
	
	/**
	 *
	 */
	getXMPMetadata(): string
	
	/**
	 * Indicates whether a proxy has already been attached, to the project item.
	 * @returns true if the project item has a proxy attached; false if not.
	 */
	hasProxy(): boolean

	/**
	 * Indicates whether the project item refers to a merged clip.
	 * @returns true if the project item is a merged clip, false if it isn’t.
	 */
	isMergedClip(): boolean

	/**
	 * Indicates whether the project item refers to a multicam clip.
	 * @returns true if the project item is a multicam clip, false if it isn’t.
	 */
	isMulticamClip(): boolean

	/**
	 * Returns a Boolean indicating whether the project item is offline.
	 * @returns true if offline.
	 */
	isOffline(): boolean

	/**
	 * Returns whether the projectItem represents a sequence.
	 * @returns true, if projectItem is a sequence.
	 */
	isSequence(): boolean
	
	/**
	 *
	 */
	moveBin(destination: ProjectItem): void
	
	/**
	 *
	 */
	refreshMedia(): string
	
	/**
	 *
	 */
	renameBin(name: string): boolean
	
	/**
	 * @returns 0 if the project item has successfully been made the target, for subsequent imports.
	 */
	select(): number
	
	/**
	 * Sets the project item’s color label.
	 * @returns 0 if successful.
	 */
	setColorLabel(newColor: number): number

	/**
	 * Returns a structure describing the current interpretation of the projectItem.
	 * @param interpretation A footage interpretation structure.
	 * @rtrue if successful.
	 */
	setFootageInterpretation(interpretation: FootageInterpretation): boolean

	/**
	 * Sets the in point to timeInTicks, for specified media types.
	 * @param time A time in Ticks.
	 * @param mediaType Determining which media type to affect; pass 1 for video only, 2 for audio only, or 4 for all media types.
	 * @returns 0 if successful.
	 */
	setInPoint(time: string, mediaType: number): number

	/**
	 * Makes the project item offline.
	 * @returns true if successful.
	 */
	setOffline(): boolean

	/**
	 * Sets the out point to timeInTicks, for specified media types.
	 * @param time A time in Ticks.
	 * @param mediaType Determining which media type to affect; pass 1 for video only, 2 for audio only, or 4 for all media types.
	 * @returns 0 if successful.
	 */
	setOutPoint(time: string, mediaType: number): number
	
	/**
	 * @returns 0 if the frame rate has successfully been changed.
	 */
	setOverrideFrameRate(newFrameRate: number): number
	
	/**
	 * @returns 0 if the aspect ratio has successfully been changed.
	 */
	setOverridePixelAspectRatio(numerator: number, denominator: number): number

	/**
	 *
	 */
	setProjectMetadata(buffer: string, keysToBeUpdated: Array<any>): void
	
	/**
	 *
	 */
	setScaleToFrameSize(): void
	
	/**
	 *
	 */
	setStartTime(arg1: object): void
	
	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void
	
	/**
	 *
	 */
	setXMPMetadata(buffer: String): boolean
	
	/**
	 *
	 */
	startTime(): Time
	
	/**
	 *
	 */
	videoComponents(): ComponentCollection

	/**
	 * 
	 * @param newColorSpace value must be available via sequence.workingColorSpaceList 
	 */
	setOverrideColorSpace(newColorSpace: string): void

	/**
	 * 
	 */
	getColorSpace(): string

	/**
	 * 
	 */
	isMultiCamClip(): boolean

	/**
	 * 
	 */
	isMergedClip(): boolean
	
	/**
	 *
	 */
	bind(eventName: string, function_: any): void
	
	/**
	 *
	 */
	getFormatted(frameRate: string, whichFormat:number): string
	
	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void
	
	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 *
 */
declare class TrackItem {
	/**
	 *
	 */
	readonly components: ComponentCollection

	/**
	 *
	 */
	readonly duration: Time

	/**
	 *
	 */
	end: Time

	/**
	 *
	 */
	inPoint: Time

	/**
	 * 
	 */
	readonly matchName: string

	/**
	 * string, either Audio or Video.
	 */
	readonly mediaType: MediaType

	/**
	 *
	 */
	name: string

	/**
	 * 
	 */
	nodeId: string

	/**
	 *
	 */
	outPoint: Time

	/**
	 *
	 */
	projectItem: ProjectItem

	/**
	 *
	 */
	start: Time

	/**
	 * Number, 1 means video, 2 means audio.
	 */
	type: number

	/**
	 * @description Returns the speed multiplier applied to the trackItem.
	 * @returns the speed multiplier applied to the trackItem, as a float. No speed adjustment = 1.
	 */
	getSpeed(): number

	/**
	 * @description Returns wheter the trackItem is an adjustment layer.
	 * @returns true if the trackitem is an adjustment layer; false if not.
	 */
	isAdjustmentLayer(): boolean

	/**
	 * 
	 */
	getLinkedItems(): TrackItemCollection
	
	/**
	 * @description Returns whether the trackItem is reversed.
	 * @returns 1 if trackItem is reversed; 0 if not.
	 */
	isReversed(): NumericalBool

	/**
	 * @description Retrieves the current selection state of the trackItem.
	 * @returns true if trackItem is selected; false if not.
	 */
	isSelected(): boolean

	/**
	 * @param state If 1, the track item will be selected; if 0, it will be deselected.
	 * @param updateUI If 1, the Premiere Pro UI will be updated after this function call is made.
	 * @returns 0 if successful.
	 */
	setSelected(state: NumericalBool, updateUI?: NumericalBool): NumericalBool

	/**
	 * @description Retrieves the match name for the trackItem.
	 * @returns the match name as a String if successful.
	 */
	getMatchName(): string
	
	/**
	 * @returns 0 if successful.
	 */
	remove(rippleEdit:boolean, alignToVideo:boolean): NumericalBool

	/**
	 *
	 */
	getMGTComponent(): any 

	/**
	 * 
	 */
	getColorSpace(): string

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

// SEQUENCE.
	
/**
 *
 */
declare class Component {

	/**
	 * @description The name of the component, as it is displayed to the user. Localized.
	 */
	readonly displayName: string 

	/**
	 * @description The name of the component, as it is loaded from disk; used to uniquely identify effect plug-ins.
	 */
	readonly matchName: string

	/**
	 * https://ppro-scripting.docsforadobe.dev/sequence/component.html#component-properties
	 * TODO: Maybe...
	 */
	readonly properties: Array<Properties>

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}
	
/**
 *
 */
declare class ComponentParam {

	/**
	 * @description Obtains the value of the component parameter stream. Note: This can only work on parameters which are not time-variant.
	 * @returns the value of the component parameter stream; the return varies with stream type.
	 * TODO: dont use any.
	 */
	getValue(): any

	/**
	 * @description Retrieves the value of the component parameter stream, at the specified keyframe time. Note: Can only be used with keyframeable parameter streams.
	 * @param time A time from which the keyframe value should be retrieved.
	 * @returns the value of the component parameter stream at time, or 0 if unsuccessful.
	 * TODO: dont use any
	 */
	getValueAtKey(time:Time): any

	/**
	 * @description Retrieves the value of the component parameter stream, at the specified time. If the value is between two keyframes then interpolation takes place.
	 * @param time A time from which the keyframe value should be retrieved.
	 * @returns the value of the component parameter stream at time, or 0 if unsuccessful.
	 * TODO: dont use any.
	 */
	getValueAtTime(time: Time): any

	/**
	 * @description Retrieves whether the component parameter varies, over time.
	 * @returns true if the parameter varies over time; false if not.
	 */
	isTimeVarying(): boolean

	/**
	 * @description Removes a keyframe on the component parameter stream, at the specified time. Note: This can only be set on parameters which support keyframing.
	 * @param time A time value, indicating when the keyframe should be removed.
	 * @returns 0 if successful.
	 */
	removeKey(time: Time): number

	/**
	 * @description Removes all keyframes from the component parameter stream, between the specified times. Note: This can only be set on parameters which support keyframing.
	 * @param startTime At what times (inclusive) to begin the removal of keyframes.
	 * @param endTime 	at what times to end the removal of keyframes.
	 * @returns 0 if successful.
	 */
	removeKeyRange(startTime: Time, endTime: Time): number

	/**
	 * @description Sets the values within a component parameter stream, representing a Color.
	 * @param alpha Alpha value.
	 * @param red Red value.
	 * @param green 	Green value.
	 * @param blue Blue value.
	 * @param updateUI If 1, will force Premiere Pro to update UI, after updating the value of the stream.
	 * @returns 0 if successful.
	 */
	setColorValue(alpha: number, red: number, green: number, blue: number, updateUI?: NumericalBool): number

	/**
	 * 
	 * TODO: I dont know the parameters type.
	 * https://ppro-scripting.docsforadobe.dev/sequence/componentparam.html#componentparam-setinterpolationtypeatkey
	 */
	setInterpolationTypeAtKey(time: Time, interpretationType: any): number

	/**
	 * @description Sets whether the component parameter varies, over time. Note: This can only be set on parameters which support keyframing.
	 * @param varying If true, component parameter will vary over time; if false, it won’t.
	 * @returns 0 if successful.
	 */
	setTimeVarying(varying: boolean): number

	/**
	 * @description Obtains the value of the component parameter stream. Note: This can only work on parameters which are not time-variant.
	 * @param value Must be of the appropriate type for the component parameter stream.
	 * @param updateUI If 1, will force Premiere Pro to update UI, after updating the value of the stream.
	 * @returns 0 if successful.
	 * TODO: dont use any.
	 */
	setValue(value: any, updateUI?: NumericalBool): number

	/**
	 * @description Sets the value of the component parameter stream, at the specified keyframe time. Note: Can only be used with keyframeable parameter streams.
	 * @param time A time at which the keyframe value should be set.
	 * @param value A value to be set.
	 * @param updateUI If 1, will force Premiere Pro to update UI, after updating the value of the stream.
	 * @returns 0 if successful.
	 * TODO: dont use any.
	 */
	setValueAtKey(time: Time, value: any, updateUI?: NumericalBool): number

	/**
	 *
	 */
	bind(eventName: string, function_: any): void
	
	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void
	
	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 * Structure containing sequence settings.
 */	
 declare class SequenceSettings {
	audioChannelCount:			number
	audioChannelType:			number
	audioDisplayFormat:			number
	audioSampleRate:			Time
	compositeLinearColor:		boolean
	editingMode:				string
	maximumBitDepth: 			boolean
	maximumRenderQuality: 		boolean
	previewCode:				string
	previewFileFormat:			string
	previewFrameHeight:			number
	previewFrameWidth:			number
	videoDisplayFormat:			number
	videoFieldType:				number
	videoFrameRate:				Time
	videoFrameHeight:			number
	videoFrameWidth:			number
	videoPixelAspectRatio:		number
	vrHorzCapturedView:			number
	vrLayout:					number
	vrProjection:				number
	vrVertCapturedView:			number
	workingColorSpaceList:		Array<string>
	workingColorSpace:			string
}

/**
 *
 */
declare class Sequence {
	/**
	 *
	 */
	sequenceSettings: SequenceSettings

	/**
	 * A collection of the sequence's audio tracks.
	 */
	readonly audioTracks: TrackCollection

	/**
	 * Timecode (as a string) of the end of the sequence.
	 */
	readonly end: string

	/**
	 * Width
	 */
	readonly frameSizeHorizontal: number

	/**
	 * Height
	 */
	readonly frameSizeVertical: number

	/**
	 * Sequence ID
	 */
	readonly id: number

	/**
	 * The sequence's markers.
	 */
	readonly markers: MarkerCollection

	/**
	 * The available colorspaces
	 */
	readonly workingColorSpaceList: Array<string>

	/**
	 * The color space in use by the sequence
	 */
	workingColorSpace: string

	/**
	 * Name (writable).
	 */
	name: string

	/**
	 * 
	 */
	videoDisplayFormat: number

	/**
	 * The `projectItem` corresponding to the sequence.
	 */
	readonly projectItem: ProjectItem

	/**
	 * Permanent ID of the sequence, within its project.
	 */
	readonly sequenceID: string

	/**
	 *
	 */
	readonly timebase: string

	/**
	 *
	 */
	readonly videoTracks: TrackCollection

	/**
	 * The starting timecode of the first frame of the sequence, as a string.
	 */
	readonly zeroPoint: string

	/**
	 * Adds a new metadata key to the sequence, and sets its value.
	 * @param propertyID Name of new property
	 * @param propertyValue Value of new property
	 */
	attachCustomProperty(propertyID: string, propertyValue: string): void

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 * Clones a sequence.
	 * @returns the clone Sequence.
	 */
	clone(): Sequence
	
	/**
	 * Creates a new sequence from the source sequence's in and out points.
	 * @param ignoreMapping If True the current selection, not track targeting, will determine 
	 * the clips to include in the new sequence. 
	 * 
	 * If there is no selection, track targeting determines which clips are included in the new sequence.
	 */
	createSubsequence(ignoreMapping: boolean): Sequence

	/**
	 * Exports a new FCP XML file representing this sequence.
	 * @param exportPath The full file path (with file name) to create.
	 * @param suppressUI Optional; quiets any warnings or errors encountered during export.
	 */
	exportAsFinalCutProXML(exportPath: string, suppressUI?: number): boolean

	/**
	 * Premiere Pro exports the sequence immediately.
	 * @param outputFilePath The output file path (with name).
	 * @param presetPath The .epr file to use.
	 * @param workAreaType Optional work area specifier. 
	 */
	exportAsMediaDirect(outputFilePath: string, presetPath: string, workAreaType?: number): string

	/**
	 * Exports the sequence (and its constituent media) as a new PPro project.
	 * @param path Output file path, including file name.
	 */
	exportAsProject(exportPath: string): void

	/**
	 * Retrieves the file extension associated with a given output preset (.epr file).
	 * @param presetFilePath full path to .epr file
	 */
	getExportFileExtension(presetFilePath: string): string

	/**
	 * Retrieves the sequence's in point, as a timecode string.
	 */
	getInPoint(): string

	/**
	 * Retrieves the sequence's out point, as a timecode string.
	 */
	getOutPoint(): string
	
	/**
	 * Retrieves the sequence's in point, as a `Time` object.
	 */
	getInPointAsTime(): Time
	
	/**
	 * Retrieves the sequence's out point, as a `Time` object.
	 */
	getOutPointAsTime(): Time

	/**
	 * Retrieves the current player position, as a `Time` object.
	 */
	getPlayerPosition(): Time

	/**
	 * Sets the in point of the sequence.
	 * @param seconds Time of in point.
	 */
	setInPoint(seconds: number): void

	/**
	 * Sets the out point of the sequence.
	 * @param seconds Time of out point.
	 */
	setOutPoint(seconds: number): void

	/**
	 * Sets the current player position.
	 * @param pos The new position, as a string, representing ticks.
	 */
	setPlayerPosition(pos: string): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 * Sets the timecode of the first frame of the sequence.
	 * @param newStartTime The new starting time, in `ticks`.
	 */
	setZeroPoint(newStartTime: string): void

	/**
	 * Links the currently-selected `trackItems` together, if possible.
	 * @returns `True` if successful.
	 */
	linkSelection(): boolean

	/**
	 * Unlinks the currently-selected `trackItems`, if possible.
	 * @returns `True` if successful.
	 */
	unlinkSelection(): boolean

	/**
	 * Imports a Motion Graphics Template (.mogrt) into the sequence
	 * @param pathToMOGRT Complete path to .mogrt
	 * @param timeInTicks Time (in ticks) at which to insert
	 * @param videoTrackOffset The offset from first video track to targeted track
	 * @param audioTrackOffset The offset from first audio track to targeted track
	 * @returns newly-created `trackItem` representing the .mogrt
	 */
	importMGT(pathToMOGRT: string, timeInTicks: string, videoTrackOffset: number, audioTrackOffset: number): TrackItem
	
	/**
	 * Returns `true` if work area is enabled.
	 */
	isWorkAreaEnabled(): boolean

	/**
	 * Sets the enabled state of the seqeuence work area.
	 * @param enableState The desired state
	 */
	setWorkAreaEnabled(enableState: boolean): void

	/**
	 * Returns the work area in point, in seconds.
	 */
	getWorkAreaInPoint(): number

	/**
	 * Specify the work area in point, in seconds.
	 * @param timeInSeconds new in point time.
	 */
	setWorkAreaInPoint(timeInSeconds: number): void

	/**
	 * Returns the work area out point, in seconds.
	 */
	getWorkAreaOutPoint(): number

	/**
	 * Specify the work area out point, in seconds.
	 * @param timeInSeconds new out point time.
	 */
	setWorkAreaOutPoint(timeInSeconds: number): void

	/**
	 * @returns the work area in point, as a `Time` object.
	 */
	getWorkAreaInPointAsTime(): Time

	/**
	 * Specify the work area in point, as `Time`.
	 */
	setWorkAreaInPointAsTime(outPoint:Time): void

	/**
	 * @returns the work area out point, as a `Time` object.
	 */
	getWorkAreaOutPointAsTime(): Time

	/**
	 * Specify the work area out point, as `Time`.
	 */
	setWorkAreaOutPointAsTime(outPoint: Time): void

	/**
	 * Inserts a clip (`trackItem`) into the sequence.
	 * @param projectItem The project item to insert.
	 * @param time Time at which to insert.
	 * @param vidTrackOffset The offset from the first video track to targeted track
	 * @param audTrackOffset The offset from the first audio track to targeted track
	 */
	insertClip(projectItem: ProjectItem, time: Time, vidTrackOffset: number, audTrackOffset: number): TrackItem

	/**
	 * @returns currently-selected clips, as an `Array` of `trackItems`
	 */
	getSelection(): Array<TrackItem>

	/**
	 * Returns the current sequence settings.
	 * @returns SequenceSettings
	 */
	getSettings(): SequenceSettings

	/**
	 * Specifies the sequence settings to use.
	 * @param newSettings New settings
	 */	
	setSettings(newSettings: SequenceSettings): void

	/**
	 *  @returns true if effect analysis is complete
	 */
	
	isDoneAnalyzingForVideoEffects(): boolean

	/**
	 * 
	 * @param numerator Numerator of desired frame aspect ratio
	 * @param denominator Denominator of desired frame aspect ratio
	 * @param motionPreset Either "default", "faster" or "slower"
	 * @param sequenceName Name for created sequence
	 * @param nest Use nested sequences?
	 */
	autoReframeSequence(numerator: number, denominator: number, motionPreset: string, sequenceName: string, nest: boolean): Sequence

	/**
	 * 
	 * @param action Either 'ApplyCuts' or 'CreateMarkers' 
	 * @param applyCutsToLinkedAudio Operate on linked audio too?
	 * @param sensitivity 'LowSensitivity', 'MediumSensitivity', or 'HighSensitivity'
	 * @returns true if successful.
	 */
	performCutDetectionOnSelection(action: string, applyCutsToLinkedAudio: boolean, sensitivity: string): boolean

	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 *
 */
declare class Track {
	/**
	 *
	 */
	readonly clips: TrackItemCollection

	/**
	 *
	 */
	readonly id: number

	/**
	 *
	 */
	readonly mediaType: string

	/**
	 *
	 */
	readonly name: string

	/**
	 *
	 */
	readonly transitions: TrackItemCollection

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	insertClip(clipProjectItem: ProjectItem, time: number): void

	/**
	 *
	 */
	isMuted(): boolean

	/**
	 *
	 */
	overwriteClip(clipProjectItem: ProjectItem, time: number): void

	/**
	 *
	 */
	setMute(arg1?: number): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	isTargeted(): boolean
	
	/**
	 *
	 */
	setTargeted(isTargeted: boolean, shouldBroadcast: boolean): boolean

	/**
	 *
	 */
	unbind(eventName: string): void
}

// OTHER.
	
/**
 *
 */
declare class AudioChannelMapping {
	/**
	 *
	 */
	seconds: number

	/**
	 *
	 */
	ticks: string

	/**
	 *
	 */
	bind(eventName: string, function_: any): void
	
	/**
	 *
	 */
	getFormatted(frameRate: string, whichFormat:number): string

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 *
 */
declare class Time {
	/**
	 *
	 */
	seconds: number

	/**
	 *
	 */
	ticks: string

	/**
	 *
	 */
	bind(eventName: string, function_: any): void
	
	/**
	 * @returns the value of the Time passed, as a string, formatted in the specified display format.
	 */
	getFormatted(frameRate: string, whichFormat: number): string
	
	/**
	 * @returns true if successful.
	 */
	 setSecondsAsFraction(numerator: number, denominator: number): boolean

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

// COLLECTION.
	
/**
 *
 */
declare class ComponentCollection {
	/**
	 *
	 */
	readonly numItems: number
	
	/**
	 *
	 */
	bind(eventName: string, function_: any): void
	
	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void
	
	/**
	 *
	 */
	unbind(eventName: string): void
	
	/**
	 *
	 */
	[index: number]: Component
}

/**
 *
 */
declare class MarkerCollection {
	/**
	 *
	 */
	readonly numMarkers: number

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	createMarker(time: number): Marker

	/**
	 *
	 */
	deleteMarker(marker: Marker): void

	/**
	 *
	 */
	getFirstMarker(): Marker

	/**
	 *
	 */
	getLastMarker(): Marker

	/**
	 *
	 */
	getNextMarker(marker: Marker): Marker

	/**
	 *
	 */
	getPrevMarker(marker: Marker): Marker

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 *
 */
declare class ProjectCollection {
	/**
	 *
	 */
	readonly numProjects: number

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 *
 */
declare class ProjectItemCollection {
	/**
	 *
	 */
	readonly numItems: number

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void

	/**
	 *
	 */
	[index: number]: ProjectItem
}

/**
 *
 */
declare class SequenceCollection {
	/**
	 *
	 */
	readonly numSequences: number

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 *
 */
declare class TrackCollection {
	/**
	 *
	 */
	readonly numTracks: number

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void

	/**
	 *
	 */
	[index: number]: Track
}

/**
 *
 */
declare class TrackItemCollection {
	/**
	 * Number of items.
	 */
	readonly numItems: number

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void

	/**
	 *
	 */
	[index: number]: TrackItem
}

/**
 *
 */
declare class ScratchDiskType {
	/**
	 *
	 */
	static readonly FirstAudioCaptureFolder: string

	/**
	 *
	 */
	static readonly FirstAudioPreviewFolder: string

	/**
	 *
	 */
	static readonly FirstAutoSaveFolder: string

	/**
	 *
	 */
	static readonly FirstCClibrariesFolder: string

	/**
	 *
	 */
	static readonly FirstCapsuleMediaFolder: string

	/**
	 *
	 */
	static readonly FirstVideoCaptureFolder: string

	/**
	 *
	 */
	static readonly FirstVideoPreviewFolder: string

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 *
 */
declare class RemoteProductionCollection {
	/**
	 *
	 */
	readonly numProductions: number

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 *
 */
declare class Document {
	/**
	 *
	 */
	getFilePath(): string

	/**
	 *
	 */
	importFiles(arg1: any): boolean

	/**
	 *
	 */
	bind(eventName: string, function_: any): void

	/**
	 *
	 */
	setTimeout(eventName: string, function_: any, milliseconds: number): void

	/**
	 *
	 */
	unbind(eventName: string): void
}

/**
 * In order to use qe please call app.enableQE() first.
 */
declare const qe: undefined | any

interface SystemCompatibilityReport {
	/**
	* @param fullOutputPath The path and filename at which to write the report.
	*/
	CreateReport(fullOutputPath: string): void
}

declare const SystemCompatibilityReport: SystemCompatibilityReport;
