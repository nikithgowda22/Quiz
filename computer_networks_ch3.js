// File: computer_networks_ch3.js

const computerNetCh3Data = [
    // --- 3.1 Data Link Layer Basics ---
    {
        "question": "What are the two major functions of the Data Link Layer?",
        "options": ["Routing and Addressing", "Data Link Control and Medium Access Control", "Encryption and Compression", "Session Management and Dialog Control"],
        "correct": 1,
        "explanation": "The Data Link Layer has two major functions: Data Link Control and Medium Access Control."
    },
    {
        "question": "Which of the following is NOT a function of Data Link Control?",
        "options": ["Framing", "Error Control", "Flow Control", "Channelization"],
        "correct": 3,
        "explanation": "Data Link Control includes Framing, Error Control, and Flow Control. Channelization belongs to Medium Access Control."
    },
    {
        "question": "Medium Access Control deals primarily with:",
        "options": ["Framing", "Access Control", "Flow Control", "Error Correction"],
        "correct": 1,
        "explanation": "Medium Access Control tells about Access Control (how to access the shared medium)."
    },

    // --- Framing ---
    {
        "question": "The process of packing bits into a data unit at the Data Link Layer is called:",
        "options": ["Packetizing", "Framing", "Segmenting", "Modulation"],
        "correct": 1,
        "explanation": "Framing is the process where bits are packed into frames by the data link layer."
    },
    {
        "question": "Which of the following is NOT a component of a Frame?",
        "options": ["Frame Header", "Payload field", "Frame Trailer", "IP Header"],
        "correct": 3,
        "explanation": "A Frame consists of Frame Header, Payload field, and Frame Trailer. IP Header is part of the Network layer packet (which becomes the payload)."
    },
    {
        "question": "Why is encapsulating the entire message in a single frame considered inefficient?",
        "options": ["It is impossible to do", "The header size becomes too large", "If a single bit error occurs, the entire frame must be retransmitted", "It violates the OSI model"],
        "correct": 2,
        "explanation": "It is inefficient because if a single bit error is there, the entire huge frame has to be retransmitted."
    },
    {
        "question": "In Fixed Size Framing, how is the boundary of the frame determined?",
        "options": ["By a delimiter flag", "By the size itself (fixed length)", "By a special character", "By signal gaps"],
        "correct": 1,
        "explanation": "Since frames are of fixed length, there is no need to define the boundary with flags; the size determines the end."
    },
    {
        "question": "Which framing method uses a Flag at the beginning and end of the frame?",
        "options": ["Fixed size framing", "Character stuffing", "Physical coding", "Violated encoding"],
        "correct": 1,
        "explanation": "Character stuffing (Variable size framing) adds a flag at the beginning and ending of the frame."
    },
    {
        "question": "In Character Stuffing, if the data contains the Flag pattern, what is added to distinguish it?",
        "options": ["Another Flag", "An ESCAPE (ESC) byte", "A zero bit", "A parity bit"],
        "correct": 1,
        "explanation": "An extra byte called ESCAPE (ESC) is added (stuffed) before the data pattern that looks like a flag."
    },
    {
        "question": "If the data contains the 'ESC' character itself in Character Stuffing, what is the solution?",
        "options": ["Remove the ESC", "Add another ESC byte before it", "Add a Flag byte", "Discard the frame"],
        "correct": 1,
        "explanation": "When there is an ESC pattern in the original frame, another escape byte is added."
    },
    {
        "question": "What is the standard Flag pattern used in HDLC protocol?",
        "options": ["01111110", "10101010", "11111111", "00000000"],
        "correct": 0,
        "explanation": "The flag has a special pattern: 01111110 (or 0x7E in hex)."
    },
    {
        "question": "In Bit Stuffing, what is done when a flag-like pattern (01111110) appears in the data?",
        "options": ["Add an ESC byte", "Stuff a '0' after five consecutive '1's", "Stuff a '1' after five consecutive '0's", "Invert the bits"],
        "correct": 1,
        "explanation": "In bit stuffing, a single bit '0' is stuffed at the end of 5 consecutive ones to break the pattern."
    },
    {
        "question": "If the input bit-string is 01111110101, what is the output after bit-stuffing (Flag: 01111110)?",
        "options": ["01111110101", "011111010101", "0111110101", "01111100101"],
        "correct": 1,
        "explanation": "After five consecutive 1s (011111...), a 0 is stuffed. The sequence becomes 011111 **0** 101."
    },

    // --- Error Control ---
    {
        "question": "Which type of error occurs when 2 or more bits are changed during transmission?",
        "options": ["Single bit error", "Burst error", "Phase error", "Jitter error"],
        "correct": 1,
        "explanation": "Burst error is when 2 or more bits get changed."
    },
    {
        "question": "Which mechanism is based on Automatic Repeat Request (ARQ)?",
        "options": ["Framing", "Error Control (Retransmission)", "Flow Control", "Line Coding"],
        "correct": 1,
        "explanation": "Error control deals with the retransmission of data based on ARQ."
    },
    {
        "question": "A simple parity check code with n=k+1 can detect:",
        "options": ["Even number of errors", "Odd number of errors", "Burst errors", "All errors"],
        "correct": 1,
        "explanation": "A simple parity check code can detect an odd number of errors."
    },
    {
        "question": "What is the minimum Hamming distance (d_min) required to detect 't' errors?",
        "options": ["t", "t + 1", "2t + 1", "t / 2"],
        "correct": 1,
        "explanation": "To detect 't' errors, d_min must be t + 1."
    },
    {
        "question": "What is the minimum Hamming distance (d_min) required to correct 't' errors?",
        "options": ["t + 1", "2t + 1", "t", "2t"],
        "correct": 1,
        "explanation": "To correct 't' errors, d_min must be 2t + 1."
    },
    {
        "question": "In CRC, if the generator polynomial is G(x), what condition ensures detection of all single-bit errors?",
        "options": ["It must have x as a factor", "It should not be divisible by x", "It must be divisible by x+1", "It must be odd"],
        "correct": 1,
        "explanation": "Rule 1: The generator should not be divisible by x to detect single-bit errors (and burst errors of length equal to polynomial)."
    },
    {
        "question": "In CRC, what condition ensures detection of all burst errors affecting an odd number of bits?",
        "options": ["Divisible by x", "Divisible by x + 1", "Divisible by x^2", "Not divisible by x"],
        "correct": 1,
        "explanation": "Rule 2: It should be divisible by x + 1 to detect burst errors affecting an odd number of bits."
    },
    {
        "question": "If the CRC generator is of 'n' bits, how many zero bits are appended to the data before division?",
        "options": ["n", "n - 1", "n + 1", "1"],
        "correct": 1,
        "explanation": "If CRC Generator has n bits, then (n-1) bits (zeros) are appended to the code."
    },
    {
        "question": "Which error detection method involves 1's complement arithmetic of data chunks?",
        "options": ["CRC", "Parity Check", "Checksum", "Hamming Code"],
        "correct": 2,
        "explanation": "Checksum bits are calculated using the complement of the sum (1's complement arithmetic)."
    },
    {
        "question": "In Hamming code, if data bits = d and redundant bits = t, which relationship must hold?",
        "options": ["2^t >= d + t", "2^t >= d + t + 1", "2^d >= d + t + 1", "t >= d + 1"],
        "correct": 1,
        "explanation": "The relationship is 2^t >= d + t + 1."
    },
    {
        "question": "If the message to be transmitted is 4 bits, what is the minimum number of redundant bits (t) required for Hamming code?",
        "options": ["2", "3", "4", "5"],
        "correct": 1,
        "explanation": "Using 2^t >= 4 + t + 1. If t=3, 8 >= 8 (True). So, 3 bits."
    },

    // --- Delays ---
    {
        "question": "Which delay is defined as the time taken to push the entire packet bits onto the wire?",
        "options": ["Propagation delay", "Transmission delay", "Queuing delay", "Processing delay"],
        "correct": 1,
        "explanation": "Transmission delay (Tt) is the time to transmit the frame. Tt = Length / Bandwidth."
    },
    {
        "question": "Which delay depends on the distance between sender and receiver?",
        "options": ["Transmission delay", "Propagation delay", "Queuing delay", "Processing delay"],
        "correct": 1,
        "explanation": "Propagation delay (Tp) = Distance / Speed."
    },

    // --- Flow Control: Noiseless ---
    {
        "question": "In a noiseless channel, which protocol assumes the receiver can never be overwhelmed?",
        "options": ["Stop and Wait", "Simple Protocol", "Go Back N", "Selective Repeat"],
        "correct": 1,
        "explanation": "Simple Protocol assumes a unidirectional, error-free channel where the receiver never discards packets (no flow/error control)."
    },
    {
        "question": "In Stop and Wait protocol, what triggers the sender to send the next packet?",
        "options": ["A timer expiration", "Receiving an Acknowledgement (ACK)", "Collision detection", "Application layer request"],
        "correct": 1,
        "explanation": "The sender waits for an ACK from the receiver before sending the next packet."
    },
    {
        "question": "What is the efficiency formula for Stop and Wait protocol?",
        "options": ["1 / (1 + a)", "1 / (1 + 2a)", "N / (1 + 2a)", "1 / 2a"],
        "correct": 1,
        "explanation": "Efficiency = 1 / (1 + 2a), where a = Tp / Tt."
    },

    // --- Flow Control: Noisy (ARQ) ---
    {
        "question": "What is added to Stop and Wait to create 'Stop and Wait ARQ'?",
        "options": ["Sliding Window", "Timeout Timer", "Multiple Channels", "Frequency Division"],
        "correct": 1,
        "explanation": "Stop and Wait ARQ = Stop and Wait + Timeout Timer (to handle lost packets)."
    },
    {
        "question": "To solve the 'Duplicate Packet' problem in Stop and Wait ARQ, what is used?",
        "options": ["Timeout Timer", "Sequence Numbers", "NAK", "Larger Window"],
        "correct": 1,
        "explanation": "Sequence numbers (0, 1) are added to data packets to detect duplicates."
    },
    {
        "question": "To solve the 'Duplicate Acknowledgement' problem, what is done?",
        "options": ["Timeout Timer", "Sequence Number in ACK", "Discarding ACK", "Stop sending"],
        "correct": 1,
        "explanation": "Sequence numbers are added to the ACK packet as well."
    },
    {
        "question": "What is the minimum number of sequence numbers required for Stop and Wait ARQ?",
        "options": ["1", "2", "N", "N+1"],
        "correct": 1,
        "explanation": "Stop and Wait ARQ requires sequence numbers 0 and 1, so 2 sequence numbers."
    },

    // --- Sliding Window Protocols (GBN & SR) ---
    {
        "question": "In Go Back N ARQ, what is the size of the Receiver Window?",
        "options": ["N", "1", "N-1", "Infinite"],
        "correct": 1,
        "explanation": "In Go Back N, the receiver window size is always 1 (it expects packets in order)."
    },
    {
        "question": "What is the relationship between Sequence Number space and Window Size (N) in Go Back N?",
        "options": ["Available Seq Num >= N", "Available Seq Num >= N + 1", "Available Seq Num >= 2N", "Available Seq Num = N"],
        "correct": 1,
        "explanation": "Max sequence number >= Sender Window + Receiver Window. Since Rx=1, Max Seq >= N + 1."
    },
    {
        "question": "In Go Back N, if the sender window size is 4, how many bits are required for the sequence number?",
        "options": ["2 bits", "3 bits", "4 bits", "1 bit"],
        "correct": 1,
        "explanation": "We need N+1 sequence numbers. If N=4, we need 5 numbers (0 to 4). log2(5) requires 3 bits."
    },
    {
        "question": "If a packet is lost in Go Back N, what does the sender do?",
        "options": ["Resends only the lost packet", "Resends the entire window", "Waits for NAK", "Stops transmission"],
        "correct": 1,
        "explanation": "The sender retransmits all outstanding packets in the current window (Go Back N)."
    },
    {
        "question": "In Selective Repeat ARQ, what is the receiver window size?",
        "options": ["1", "N (Same as Sender)", "N+1", "0"],
        "correct": 1,
        "explanation": "In Selective Repeat, the receiver window size is equal to the sender window size (N)."
    },
    {
        "question": "What is the requirement for Sequence Numbers in Selective Repeat ARQ?",
        "options": ["Seq Num >= N + 1", "Seq Num >= 2N", "Seq Num >= N", "Seq Num >= N/2"],
        "correct": 1,
        "explanation": "Available Sequence Numbers >= Sender Window + Receiver Window. Since Send=Recv=N, Seq Num >= 2N."
    },
    {
        "question": "Which protocol uses 'Negative Acknowledgement' (NAK)?",
        "options": ["Stop and Wait", "Go Back N", "Selective Repeat", "Simple Protocol"],
        "correct": 2,
        "explanation": "Selective Repeat uses NAK to request retransmission of specific corrupted/missing frames."
    },
    {
        "question": "Which ARQ protocol accepts out-of-order packets?",
        "options": ["Stop and Wait", "Go Back N", "Selective Repeat", "None"],
        "correct": 2,
        "explanation": "Selective Repeat accepts out-of-order packets (within the window) and buffers them."
    },
    {
        "question": "The efficiency of Sliding Window Protocol (GBN or SR) is given by:",
        "options": ["1 / (1 + 2a)", "N / (1 + 2a)", "N * a", "1 / N"],
        "correct": 1,
        "explanation": "Efficiency = (N * Tt) / (Tt + 2Tp) = N / (1 + 2a)."
    },

    // --- Multiple Access: Random Access (Aloha) ---
    {
        "question": "In Pure Aloha, when can a station transmit data?",
        "options": ["Only at the beginning of a time slot", "Whenever it has data", "Only when polled", "When it has a token"],
        "correct": 1,
        "explanation": "In Pure Aloha, a station transmits whenever it has data to send."
    },
    {
        "question": "What is the Vulnerable Time for Pure Aloha?",
        "options": ["Tt", "2 * Tt", "Tp", "2 * Tp"],
        "correct": 1,
        "explanation": "Vulnerable time for Pure Aloha is 2 * Frame Transmission Time (Tt)."
    },
    {
        "question": "What is the maximum efficiency (throughput) of Pure Aloha?",
        "options": ["18.4%", "36.8%", "50%", "100%"],
        "correct": 0,
        "explanation": "Max efficiency of Pure Aloha is 1/2e ≈ 0.184 (18.4%)."
    },
    {
        "question": "In Slotted Aloha, when can a station transmit data?",
        "options": ["Any time", "Only at the beginning of a time slot", "Only at the end of a slot", "When the channel is idle for 1 minute"],
        "correct": 1,
        "explanation": "In Slotted Aloha, transmission must begin at the start of a time slot."
    },
    {
        "question": "What is the Vulnerable Time for Slotted Aloha?",
        "options": ["Tt", "2 * Tt", "Tp", "2 * Tp"],
        "correct": 0,
        "explanation": "Vulnerable time for Slotted Aloha is Tt (one time slot)."
    },
    {
        "question": "What is the maximum efficiency of Slotted Aloha?",
        "options": ["18.4%", "36.8%", "50%", "80%"],
        "correct": 1,
        "explanation": "Max efficiency of Slotted Aloha is 1/e ≈ 0.368 (36.8%)."
    },

    // --- Multiple Access: CSMA ---
    {
        "question": "CSMA is based on which principle?",
        "options": ["Send and Pray", "Sense before Transmit", "Listen while Talking", "Token Passing"],
        "correct": 1,
        "explanation": "CSMA (Carrier Sense Multiple Access) is based on 'Sense before Transmit'."
    },
    {
        "question": "What is the Vulnerable Time in CSMA?",
        "options": ["Transmission Time (Tt)", "Propagation Time (Tp)", "2 * Tt", "Zero"],
        "correct": 1,
        "explanation": "The vulnerable time for CSMA is the propagation time (Tp)."
    },
    {
        "question": "In 1-persistent CSMA, what does a station do if the channel is busy?",
        "options": ["Waits a random time", "Continuously senses the channel until idle", "Drops the packet", "Sends immediately"],
        "correct": 1,
        "explanation": "It continuously senses the channel (probability 1) and transmits immediately when it becomes idle."
    },
    {
        "question": "In Non-persistent CSMA, what does a station do if the channel is busy?",
        "options": ["Waits a random amount of time", "Continuously senses", "Transmits anyway", "Disconnects"],
        "correct": 0,
        "explanation": "It waits for a random amount of time before sensing the channel again."
    },

    // --- Multiple Access: CSMA/CD ---
    {
        "question": "CSMA/CD stands for:",
        "options": ["Collision Destruction", "Collision Detection", "Code Division", "Carrier Drop"],
        "correct": 1,
        "explanation": "Carrier Sense Multiple Access with Collision Detection."
    },
    {
        "question": "In CSMA/CD, what is the condition for the minimum frame size (L)?",
        "options": ["Tt >= Tp", "Tt >= 2 * Tp", "Tt <= Tp", "Tt = 0"],
        "correct": 1,
        "explanation": "Transmission Delay (Tt) must be at least twice the Propagation Delay (Tp) to detect collisions."
    },
    {
        "question": "If a collision is detected in CSMA/CD, what does the station send?",
        "options": ["An ACK", "A NAK", "A Jamming Signal", "A Token"],
        "correct": 2,
        "explanation": "The station sends a jamming signal to alert other stations of the collision."
    },
    {
        "question": "Which algorithm is used to determine the waiting time after a collision in CSMA/CD?",
        "options": ["Round Robin", "Binary Exponential Backoff", "Shortest Job First", "Priority Scheduling"],
        "correct": 1,
        "explanation": "The Binary Exponential Backoff algorithm is used to calculate the backoff time."
    },
    {
        "question": "After 'n' collisions, the station chooses a random number 'k' from the range:",
        "options": ["0 to n", "0 to 2^n - 1", "0 to 2^n", "1 to n"],
        "correct": 1,
        "explanation": "The range is [0, 2^n - 1]."
    },
    {
        "question": "Standard Ethernet uses which access method?",
        "options": ["CSMA/CA", "CSMA/CD", "Aloha", "Token Passing"],
        "correct": 1,
        "explanation": "Wired LAN (Standard Ethernet IEEE 802.3) uses CSMA/CD."
    },

    // --- Controlled Access & Channelization ---
    {
        "question": "Which protocol uses a centralized controller to grant permission to stations?",
        "options": ["Aloha", "Polling", "CSMA", "Token Ring"],
        "correct": 1,
        "explanation": "Polling uses a centralized controller (Primary station) to poll secondary stations."
    },
    {
        "question": "In Token Passing, a station can only transmit if:",
        "options": ["The channel is idle", "It has the Token", "The controller approves", "It detects a collision"],
        "correct": 1,
        "explanation": "Access is granted through a special frame called a Token."
    },
    {
        "question": "In TDMA (Time Division Multiple Access), the bandwidth is shared in:",
        "options": ["Frequency", "Time", "Code", "Space"],
        "correct": 1,
        "explanation": "Time of the link is divided into fixed-size intervals (Time slots)."
    },
    {
        "question": "In FDMA, the bandwidth is divided into:",
        "options": ["Time slots", "Frequency bands", "Codes", "Packets"],
        "correct": 1,
        "explanation": "The common channel bandwidth is divided into frequency bands separated by guard bands."
    },

    // --- Ethernet (IEEE 802.3) ---
    {
        "question": "What is the physical topology of Standard Ethernet?",
        "options": ["Star", "Ring", "Bus", "Mesh"],
        "correct": 2,
        "explanation": "Standard Ethernet typically uses Bus topology."
    },
    {
        "question": "Which encoding technique is used in Standard Ethernet?",
        "options": ["NRZ", "Manchester", "Differential Manchester", "AMI"],
        "correct": 1,
        "explanation": "Standard Ethernet uses Manchester encoding."
    },
    {
        "question": "What is the size of the Preamble in an Ethernet frame?",
        "options": ["1 byte", "6 bytes", "7 bytes", "8 bytes"],
        "correct": 2,
        "explanation": "The preamble is 7 bytes long (alternating 0s and 1s) for synchronization."
    },
    {
        "question": "What is the Start Frame Delimiter (SFD) pattern?",
        "options": ["10101010", "10101011", "11111111", "01111110"],
        "correct": 1,
        "explanation": "SFD is 1 byte: 10101011. The last two '11' bits signal the start of the frame."
    },
    {
        "question": "What is the length of a MAC address (Source/Destination) in Ethernet?",
        "options": ["4 bytes", "6 bytes", "8 bytes", "12 bytes"],
        "correct": 1,
        "explanation": "MAC addresses are 6 bytes (48 bits) long."
    },
    {
        "question": "In an Ethernet address, if the least significant bit of the first byte is 1, the address is:",
        "options": ["Unicast", "Multicast", "Broadcast", "Invalid"],
        "correct": 1,
        "explanation": "If the LSB of the first byte is 1, it is a Multicast address. If 0, it is Unicast."
    },
    {
        "question": "Which address type has all bits as 1 (FF:FF:FF:FF:FF:FF)?",
        "options": ["Unicast", "Multicast", "Broadcast", "Anycast"],
        "correct": 2,
        "explanation": "Broadcast destination address has all bits as 1."
    },
    {
        "question": "What is the minimum frame length for Ethernet?",
        "options": ["46 bytes", "64 bytes", "128 bytes", "1518 bytes"],
        "correct": 1,
        "explanation": "Minimum Ethernet frame length is 64 bytes."
    },
    {
        "question": "What is the maximum frame length for Ethernet?",
        "options": ["1500 bytes", "1518 bytes", "65535 bytes", "1024 bytes"],
        "correct": 1,
        "explanation": "Maximum Ethernet frame length is 1518 bytes (1500 data + 18 header/trailer)."
    },
    {
        "question": "The Length field in an Ethernet frame describes:",
        "options": ["Total frame length", "Length of the data field", "Length of the header", "Length of the CRC"],
        "correct": 1,
        "explanation": "The 2-byte Length field describes the number of bytes in the data field."
    },
    {
        "question": "Why is the source address always unicast?",
        "options": ["It can be multicast", "Because a frame comes from a single station", "Because the protocol says so", "To save bits"],
        "correct": 1,
        "explanation": "A frame is generated by a specific single station, so the source address is always unicast."
    },

    // --- Networking Devices ---
    {
        "question": "A Repeater operates at which layer?",
        "options": ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
        "correct": 0,
        "explanation": "A repeater operates at the Physical layer to regenerate signals."
    },
    {
        "question": "Which device is also known as a Multiport Repeater?",
        "options": ["Bridge", "Switch", "Active Hub", "Router"],
        "correct": 2,
        "explanation": "An Active Hub is a multiport repeater."
    },
    {
        "question": "Does a Hub filter data or separate collision domains?",
        "options": ["Yes, it filters data", "No, collision domain remains the same", "It separates collision domains", "It acts as a router"],
        "correct": 1,
        "explanation": "Hubs broadcast data to all ports and cannot filter data; the collision domain remains the same."
    },
    {
        "question": "A Bridge operates at which layers?",
        "options": ["Physical only", "Physical and Data Link", "Data Link and Network", "All layers"],
        "correct": 1,
        "explanation": "A Bridge operates at the Physical and Data Link layers."
    },
    {
        "question": "What is the main advantage of a Switch over a Hub?",
        "options": ["It regenerates signals", "It has filtering capability and separates collision domains", "It connects different networks", "It is cheaper"],
        "correct": 1,
        "explanation": "Switches (Layer 2) can filter based on MAC addresses, creating separate collision domains for each port."
    },
    {
        "question": "A Router operates at which layer?",
        "options": ["Data Link", "Network", "Transport", "Application"],
        "correct": 1,
        "explanation": "Routers operate at the Network layer (and below) to route packets based on logical (IP) addresses."
    },
    {
        "question": "Which device is used to connect two dissimilar LANs?",
        "options": ["Hub", "Repeater", "Router", "Bridge"],
        "correct": 2,
        "explanation": "A Router is used to link two dissimilar LANs."
    },
    {
        "question": "A Gateway operates at which layers?",
        "options": ["Network only", "Data Link only", "All 7 layers (Application to Physical)", "Transport only"],
        "correct": 2,
        "explanation": "A gateway is normally a computer that operates in all layers of the OSI model."
    },

    // --- Concept & Calculation Questions ---
    {
        "question": "What is Piggybacking?",
        "options": ["Sending data twice", "Sending acknowledgement along with data in a bidirectional frame", "Sending data without ACK", "Hiding data in headers"],
        "correct": 1,
        "explanation": "Piggybacking improves efficiency by carrying control info (ACK) about received frames inside a frame carrying outgoing data."
    },
    {
        "question": "If bandwidth = 100 kbps and propagation delay = 20 ms, what is the minimum frame size for Stop and Wait to achieve 50% efficiency?",
        "options": ["2000 bits", "4000 bits", "1000 bits", "500 bits"],
        "correct": 1,
        "explanation": "Efficiency = 1/(1+2a) = 0.5 => 1+2a = 2 => 2a=1 => a=0.5. a = Tp/Tt. Tt = 2*Tp = 40ms. Size = Bandwidth * Tt = 100kbps * 40ms = 4000 bits."
    },
    {
        "question": "In a satellite link with high propagation delay, which protocol is preferred?",
        "options": ["Stop and Wait", "CSMA/CD", "Selective Repeat / Go Back N", "Token Ring"],
        "correct": 2,
        "explanation": "Stop and Wait is inefficient for high delays. Sliding window protocols (SR/GBN) utilize bandwidth better."
    },
    {
        "question": "Why is CSMA/CD not suitable for high propagation delay networks (like Satellite)?",
        "options": ["It is too slow", "Collision detection requires frame size to be very large", "Signals don't travel in space", "Satellites don't support carrier sensing"],
        "correct": 1,
        "explanation": "For CSMA/CD, L >= 2*Tp*B. If Tp is huge (satellite), the minimum frame size L becomes impractically large."
    },
    {
        "question": "What is the function of the Spanning Tree Algorithm in bridges?",
        "options": ["To increase speed", "To prevent looping problems", "To rout packets", "To assign IP addresses"],
        "correct": 1,
        "explanation": "Spanning Tree prevents loops in a network with redundant bridges."
    },// --- Advanced Token Ring & Polling ---
    {
        "question": "In a Token Ring network using 'Early Token Reinsertion', what is the efficiency formula?",
        "options": ["1 / (1 + a/N)", "1 / (1 + a)", "1 / (1 + N/a)", "1 / (1 + a(1 + 1/N))"],
        "correct": 0,
        "explanation": "For Early token reinsertion, Efficiency = 1 / (1 + a/N)[cite: 1517]."
    },
    {
        "question": "In a Token Ring network using 'Delayed Token Reinsertion', what is the efficiency formula?",
        "options": ["1 / (1 + a)", "1 / (1 + a/N)", "1 / (1 + {a(1 + 1/N)})", "1 / (1 + 2a)"],
        "correct": 2,
        "explanation": "For Delayed token reinsertion, Efficiency = 1 / (1 + {a(1 + 1/N)})[cite: 1517]."
    },
    {
        "question": "What is a major disadvantage of the Polling protocol?",
        "options": ["Collisions occur frequently", "High overhead of polling messages", "Requires synchronization", "Packets are broadcasted"],
        "correct": 1,
        "explanation": "A major disadvantage is the high overhead of polling messages and dependence on the controller[cite: 1482]."
    },
    {
        "question": "In the Reservation access method, how is time divided?",
        "options": ["Into fixed frames", "Into intervals containing a reservation frame followed by data frames", "Into random slots", "Into token holding times"],
        "correct": 1,
        "explanation": "Time is divided into intervals. [cite_start]In each interval, a reservation frame precedes the data frames [cite: 1498-1499]."
    },

    // --- Advanced Connecting Devices ---
    {
        "question": "Which device is capable of performing 'Source Routing' where the source host specifies the path?",
        "options": ["Transparent Bridge", "Source Routing Bridge", "Layer 2 Switch", "Active Hub"],
        "correct": 1,
        "explanation": "In Source Routing Bridges, routing is performed by the source host, and the frame contains addresses of all bridges to be visited [cite: 1731-1733]."
    },
    {
        "question": "A 'Transparent Bridge' has which of the following characteristics?",
        "options": ["Stations are unaware of its existence", "It modifies the source MAC address", "It uses IP addresses for filtering", "It requires manual configuration of paths"],
        "correct": 0,
        "explanation": "A transparent bridge is one in which the stations are completely unaware of the bridge's existence[cite: 1721]."
    },
    {
        "question": "To prevent looping problems in Transparent Bridges, which algorithm is used?",
        "options": ["Dijkstra's Algorithm", "Bellman-Ford", "Spanning Tree Algorithm", "Binary Backoff"],
        "correct": 2,
        "explanation": "The Spanning Tree Algorithm is used to prevent loops and ensure only one path exists between any pair of bridges[cite: 1730]."
    },
    {
        "question": "What distinguishes a 'Three-Layer Switch' from a standard Router?",
        "options": ["It operates only at Layer 2", "It is slower than a router", "It is a router with faster, sophisticated switching fabric", "It cannot route IP packets"],
        "correct": 2,
        "explanation": "A three-layer switch is a router which is faster and more sophisticated, allowing faster table lookup [cite: 1753-1754]."
    },

    // --- Advanced Ethernet & CSMA/CD ---
    {
        "question": "The efficiency of Standard Ethernet is given by the formula:",
        "options": ["1 / (1 + 2a)", "1 / (1 + 5a)", "1 / (1 + 6.44a)", "1 / (1 + a)"],
        "correct": 2,
        "explanation": "Efficiency of standard ethernet = 1 / (1 + 6.44a), where a = Tp/Tt[cite: 1413]."
    },
    {
        "question": "In CSMA/CD, as the number of stations (n) approaches infinity, the maximum probability of successful transmission approaches:",
        "options": ["1", "0.5", "1/e", "0"],
        "correct": 2,
        "explanation": "Limit as n -> infinity for (1 - 1/n)^(n-1) is 1/e[cite: 1410]."
    },
    {
        "question": "In CSMA/CD, the number of attempts a station makes before successfully transmitting is approximately:",
        "options": ["1", "e (2.718)", "2", "n"],
        "correct": 1,
        "explanation": "The number of attempts is 1/P_max = 1/(1/e) = e[cite: 1412]."
    },

    // --- Advanced Error & Hamming ---
    {
        "question": "For Hamming Code, if 'd' is data bits and 't' is redundant bits, what is the exact inequality relation?",
        "options": ["2^t >= d + t", "2^t >= d + t + 1", "2^t <= d + t + 1", "2^d >= t + 1"],
        "correct": 1,
        "explanation": "The relationship is 2^t >= d + t + 1[cite: 652]."
    },
    {
        "question": "In Bit Stuffing with the flag 01111110, a '0' is stuffed after:",
        "options": ["Four consecutive 1s", "Five consecutive 1s", "Six consecutive 1s", "Any sequence of 1s"],
        "correct": 1,
        "explanation": "We need to stuff a single bit '0' at the end of 5 consecutive ones[cite: 457]."
    },
    {
        "question": "Which connecting device operates at all five layers of the Internet model (or 7 of OSI)?",
        "options": ["Router", "Bridge", "Gateway", "Switch"],
        "correct": 2,
        "explanation": "A gateway is normally a computer that operates in all five layers of the Internet or seven layers of OSI model[cite: 1774]."
    }
];