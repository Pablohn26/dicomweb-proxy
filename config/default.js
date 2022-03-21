const config = {};

// our SCP (only used if useCget is false
config.source = {
  aet: 'DICOMWEB_PROXY',
  ip: '127.0.0.1',
  port: 8888,
};

// define DICOM peers here
config.peers = [
  {
    aet: 'CONQUESTSRV1',
    ip: '127.0.0.1',
    port: 5678,
  }
];

/*
Supported Transfer Syntaxes:
1.2.840.10008.1.2       Implicit VR Endian: Default Transfer Syntax for DICOM    
1.2.840.10008.1.2.1     Explicit VR Little Endian    
1.2.840.10008.1.2.2     Explicit VR Big Endian   
1.2.840.10008.1.2.4.50  JPEG Baseline (Process 1) - Lossy JPEG 8-bit Image Compression
1.2.840.10008.1.2.4.51  JPEG Baseline (Processes 2 & 4) - Lossy JPEG 12-bit Image Compression
1.2.840.10008.1.2.4.70  JPEG Lossless, Nonhierarchical, First- Order Prediction
1.2.840.10008.1.2.4.80  JPEG-LS Lossless Image Compression   <-- recommended
1.2.840.10008.1.2.4.81  JPEG-LS Lossy (Near- Lossless) Image Compression
1.2.840.10008.1.2.4.90  JPEG 2000 Image Compression (Lossless Only)	 
1.2.840.10008.1.2.4.91  JPEG 2000 Image Compression
1.2.840.10008.1.2.5     RLE Lossless
*/

// transfer syntax (e.g. compression of dicom files) used for transmission via wado and proposed to pacs
config.transferSyntax = '1.2.840.10008.1.2.4.80';

// log directory
config.logDir = './logs';

// cache directory
config.storagePath = './data';

// keep cache alive for how long after storage or -1 to disable
config.cacheRetentionMinutes = 60;

// webserver port
config.webserverPort = 5000;

// target PACS supports C-Get (if flase use C-Move instead)
config.useCget = true;

// define which level to use for C-Move/C-Get fetches: STUDY, SERIES, IMAGE
config.useFetchLevel = 'SERIES';

// number of associations to PACS run in parallel
config.maxAssociations = 4;

// do not issue c-find if search contains less characters
config.qidoMinChars = 0;

// auto append * for patient name query
config.qidoAppendWildcard = true;

// enable verbose logging to std::out (contains DIMSE output)
config.verboseLogging = false;

// disabled when empty, otherwise use connection url e.g. ws://localhost:6001
config.websocketUrl = '';

// this is the secret your dicomweb-websocket-bride needs to configure too, make sure to keep it secret, and of course change it ;-) hint: use https://hashgenerator.de/
config.websocketToken =
  'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e';

// to enable Keycloack authentication you need a keycloack.json file on root directory
config.useKeycloakAuth = false;

// clear cache on startup 
config.clearCacheOnStartup = true;

module.exports = config;
