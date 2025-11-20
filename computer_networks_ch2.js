// File: computer_networks_ch2.js

const computerNetCh2Data = [
    // --- 2.1 Introduction & Basics ---
    {
        "question": "Which layer deals with electrical, mechanical, and functional characteristics of the interface?",
        "options": ["Data Link Layer", "Network Layer", "Physical Layer", "Transport Layer"],
        "correct": 2,
        "explanation": "The Physical layer deals with electrical, mechanical, and functional characteristics of the interface."
    },
    {
        "question": "Physical connectivity between one hop to another can be:",
        "options": ["Wired only", "Wireless only", "Wired or Wireless", "Virtual only"],
        "correct": 2,
        "explanation": "Physical connectivity must be there between one hop to other hop, which may be wired or wireless."
    },
    {
        "question": "The Physical layer is responsible for the transmission of what type of data?",
        "options": ["Packets", "Frames", "Binary data", "Datagrams"],
        "correct": 2,
        "explanation": "It is responsible for the transmission of binary data through a medium."
    },
    {
        "question": "Continuous waveform signals are known as:",
        "options": ["Digital signals", "Analog signals", "Discrete signals", "Binary signals"],
        "correct": 1,
        "explanation": "Transmission can be analog, which consists of continuous waveform signals."
    },
    {
        "question": "Discrete binary signals are known as:",
        "options": ["Analog signals", "Digital signals", "Continuous signals", "Modulated signals"],
        "correct": 1,
        "explanation": "Transmission can be digital, which consists of discrete binary signals."
    },
    {
        "question": "What is the primary function of a Modem?",
        "options": ["To route packets", "To multiplex signals", "To convert analog to digital and vice versa", "To amplify signals"],
        "correct": 2,
        "explanation": "A Modem is used to convert analog signals to digital and vice versa."
    },
    {
        "question": "What is the primary function of a Multiplexer?",
        "options": ["To connect multiple networks", "To allow multiple signals to be carried on a single transmission line", "To convert digital to analog", "To boost signal strength"],
        "correct": 1,
        "explanation": "Multiplexers allow multiple signals to be carried on a single transmission line."
    },

    // --- Baseband vs Broadband ---
    {
        "question": "Baseband transmission is typically used in which type of network?",
        "options": ["WAN", "MAN", "LAN", "PAN"],
        "correct": 2,
        "explanation": "Baseband transmission is typically used in Local Area Networks (LAN)."
    },
    {
        "question": "Which type of signal does Baseband transmission use?",
        "options": ["Analog signal", "Digital signal", "Radio signal", "Microwave signal"],
        "correct": 1,
        "explanation": "Baseband transmission uses a digital signal over a single wire."
    },
    {
        "question": "In Baseband transmission, how is the bandwidth utilized?",
        "options": ["Shared by multiple analog signals", "Entire bandwidth is used by digital signals", "Split into frequency channels", "Used only for control signals"],
        "correct": 1,
        "explanation": "In a baseband transmission, the entire bandwidth of the channel is used by digital signals."
    },
    {
        "question": "Broadband transmission is typically used in which type of network?",
        "options": ["LAN", "WAN", "PAN", "SAN"],
        "correct": 1,
        "explanation": "Broadband Transmission is typically used in Wide Area Networks (WAN)."
    },
    {
        "question": "Broadband transmission uses which type of signal?",
        "options": ["Digital signals", "Analog signals", "Discrete pulses", "Square waves"],
        "correct": 1,
        "explanation": "Broadband transmission uses analog signals over multiple transmission frequencies."
    },
    {
        "question": "Which multiplexing technique is used in Broadband transmission?",
        "options": ["TDM", "FDM", "CDM", "WDM"],
        "correct": 1,
        "explanation": "In broadband transmission, multiplexing is used using Frequency Division Multiplexing (FDM)."
    },

    // --- Bandwidth & Throughput ---
    {
        "question": "Bandwidth is defined as:",
        "options": ["The maximum latency of a channel", "The difference between highest and lowest frequencies in a signal", "The speed of light in the medium", "The number of bits sent per second"],
        "correct": 1,
        "explanation": "Bandwidth is the difference between the highest and lowest frequencies contained in the composite signal."
    },
    {
        "question": "What is the formula for Bandwidth?",
        "options": ["Freq_H + Freq_L", "Freq_H / Freq_L", "Freq_H - Freq_L", "Freq_H * Freq_L"],
        "correct": 2,
        "explanation": "Bandwidth = freq_H - freq_L."
    },
    {
        "question": "What is a composite signal?",
        "options": ["A single pure sine wave", "A composition of many waves", "A digital pulse", "A DC signal"],
        "correct": 1,
        "explanation": "Signals are the composition of many waves; they may be periodic or non-periodic."
    },
    {
        "question": "Frequency of periodic signals has what kind of value?",
        "options": ["Continuous", "Discrete", "Random", "Infinite"],
        "correct": 1,
        "explanation": "The frequency of periodic signals has a discrete value."
    },
    {
        "question": "Frequency of non-periodic signals has what kind of value?",
        "options": ["Discrete", "Continuous", "Fixed", "Binary"],
        "correct": 1,
        "explanation": "The frequency of non-periodic signals has a continuous value."
    },
    {
        "question": "What is the difference between measuring bandwidth in Hz vs kbps?",
        "options": ["Hz is for digital, kbps for analog", "Hz is range of frequencies, kbps is bits per second on a link", "They are identical", "Hz measures speed, kbps measures capacity"],
        "correct": 1,
        "explanation": "Hz is the range of frequencies a channel can pass; kbps is the bandwidth on a link in bits per second."
    },
    {
        "question": "What is Throughput?",
        "options": ["The maximum capacity of the channel", "How fast we can actually send data through a network", "The theoretical limit of the link", "The propagation speed"],
        "correct": 1,
        "explanation": "Throughput is how fast we can send data through a network (actual performance vs theoretical bandwidth)."
    },

    // --- Latency & Delays ---
    {
        "question": "Latency is best defined as:",
        "options": ["The width of the frequency band", "The number of bits per second", "The delay/time taken for a message to travel from source to destination", "The signal to noise ratio"],
        "correct": 2,
        "explanation": "Latency is the delay, how much time it takes to travel a message from source to destination."
    },
    {
        "question": "Which of the following is NOT a component of Latency mentioned in the text?",
        "options": ["Propagation delay", "Transmission delay", "Queuing delay", "Encryption delay"],
        "correct": 3,
        "explanation": "The components listed are Propagation, Transmission, Queueing, and Processing delay."
    },
    {
        "question": "The time duration for 1 bit to travel the link is called:",
        "options": ["Transmission delay", "Propagation delay", "Processing delay", "Queuing delay"],
        "correct": 1,
        "explanation": "Propagation delay is the time duration for 1 bit to travel the link."
    },
    {
        "question": "What is the formula for Propagation Delay (Tp)?",
        "options": ["Distance / Bandwidth", "Distance / Velocity", "Frame Size / Bandwidth", "Frame Size / Velocity"],
        "correct": 1,
        "explanation": "Tp = distance between sender and receiver / velocity of the signal."
    },
    {
        "question": "The time taken to push the entire packet bits onto the wire is called:",
        "options": ["Propagation delay", "Transmission delay", "Queuing delay", "Processing delay"],
        "correct": 1,
        "explanation": "Transmission delay is the time taken to push the entire packet bits onto the wire."
    },
    {
        "question": "What is the formula for Transmission Delay (Tt)?",
        "options": ["Distance / Velocity", "Frame size / Bandwidth", "Bandwidth / Frame size", "Velocity / Distance"],
        "correct": 1,
        "explanation": "Tt = Frame size or packet size / Bandwidth."
    },
    {
        "question": "The time taken for a packet to stay in the buffer is known as:",
        "options": ["Processing delay", "Propagation delay", "Queuing delay", "Transmission delay"],
        "correct": 2,
        "explanation": "Queuing delay is the time taken for a packet to stay in the buffer."
    },
    {
        "question": "The time routers take to process the packet header is called:",
        "options": ["Queuing delay", "Processing delay", "Transmission delay", "Propagation delay"],
        "correct": 1,
        "explanation": "Processing delay is the time routers or switches take to process the packet header."
    },

    // --- Signal Transmission & Levels ---
    {
        "question": "In a digital signal representation, positive voltage typically represents:",
        "options": ["0", "1", "Null", "High Impedance"],
        "correct": 1,
        "explanation": "1 -> Positive voltage."
    },
    {
        "question": "In a digital signal representation, zero voltage typically represents:",
        "options": ["0", "1", "High", "Low"],
        "correct": 0,
        "explanation": "0 -> Zero voltage."
    },
    {
        "question": "To send information at 1 bit per level, how many signal levels are needed?",
        "options": ["1", "2", "4", "8"],
        "correct": 1,
        "explanation": "For 1 bit per level, we need 2 levels (2^1)."
    },
    {
        "question": "To send information at 2 bits per level, how many signal levels are needed?",
        "options": ["2", "4", "8", "16"],
        "correct": 1,
        "explanation": "For 2 bits per level, 4 levels are needed (2^2)."
    },
    {
        "question": "What is 'Bit Rate'?",
        "options": ["Number of signal changes per second", "Number of bits sent in one second", "Maximum frequency of the channel", "Voltage level of the signal"],
        "correct": 1,
        "explanation": "Bit rate is the number of bits sent in one second."
    },
    {
        "question": "What is 'Baud Rate'?",
        "options": ["Number of bits per second", "Number of times the signal changes per second", "The bandwidth of the channel", "The signal to noise ratio"],
        "correct": 1,
        "explanation": "Baud rate is the number of times signal changes per second."
    },
    {
        "question": "What is 'Channel Capacity'?",
        "options": ["Maximum frequency allowed", "Minimum noise level", "Maximum rate at which data can be communicated", "Number of cables used"],
        "correct": 2,
        "explanation": "Channel capacity is the maximum rate at which data can be communicated."
    },

    // --- Encoding ---
    {
        "question": "What is Encoding?",
        "options": ["Converting specified format to actual format", "Converting one format into another specified format", " compressing data", "Encrypting data"],
        "correct": 1,
        "explanation": "Encoding is the process of converting from one format into another (specified) format."
    },
    {
        "question": "If all signal elements have the same sign (all positive or all negative), the signal is:",
        "options": ["Polar", "Bipolar", "Unipolar", "Multipolar"],
        "correct": 2,
        "explanation": "If all signal elements have the same sign, the signal is Unipolar."
    },
    {
        "question": "If signal elements have one positive and another negative sign, the signal is:",
        "options": ["Unipolar", "Polar", "Digital", "Analog"],
        "correct": 1,
        "explanation": "If the signal elements have one positive and another negative sign, then the signal is Polar."
    },
    {
        "question": "Which encoding schemes are typically used in IEEE 802.3?",
        "options": ["NRZ-L and NRZ-I", "RZ and AMI", "Manchester and Differential Manchester", "HDB3 and B8ZS"],
        "correct": 2,
        "explanation": "Manchester and Differential Manchester are used in IEEE 802.3."
    },
    {
        "question": "In Manchester encoding, a '1' is represented by:",
        "options": ["High to low transition", "Low to high transition in middle of interval", "No transition", "Constant positive voltage"],
        "correct": 1,
        "explanation": "According to the text, 1 -> low to high transition in middle of interval."
    },
    {
        "question": "In Manchester encoding, a '0' is represented by:",
        "options": ["Low to high transition", "High to low transition in middle of interval", "Zero voltage", "Inversion at start"],
        "correct": 1,
        "explanation": "According to the text, 0 -> high to low transition in middle of interval."
    },
    {
        "question": "A key characteristic of Differential Manchester encoding is:",
        "options": ["No transition in the middle", "Always inversion at the middle occurs", "Uses three voltage levels", "Only works for unipolar signals"],
        "correct": 1,
        "explanation": "In Differential Manchester, 'Always inversion at the middle occur'."
    },

    // --- Noise & Data Rates ---
    {
        "question": "Noise created by the random motion of electrons in a wire is called:",
        "options": ["Crosstalk", "Impulse noise", "Thermal noise", "Induced noise"],
        "correct": 2,
        "explanation": "Thermal noise gets created by the random motion of electrons in a wire."
    },
    {
        "question": "Noise caused by radiation induced on other signals due to close proximity is:",
        "options": ["Thermal noise", "Crosstalk", "Impulse noise", "White noise"],
        "correct": 1,
        "explanation": "Crosstalk is an effect of radiation which is induced on other signals because of close proximity."
    },
    {
        "question": "Spike noise coming for a short duration due to sudden actions like lightning is:",
        "options": ["Thermal noise", "Crosstalk", "Impulse noise", "Gaussian noise"],
        "correct": 2,
        "explanation": "Impulse noise is spike noise which comes for a short duration due to instant action like lightning."
    },
    {
        "question": "SNR (Signal to Noise Ratio) is defined as:",
        "options": ["Average noise power / Average signal power", "Average signal power / Average noise power", "Signal voltage / Noise voltage", "Bandwidth / Noise"],
        "correct": 1,
        "explanation": "SNR = Average signal power / Average noise power."
    },
    {
        "question": "What is the formula for SNR in decibels (dB)?",
        "options": ["10 * log10(SNR)", "20 * log10(SNR)", "log10(SNR)", "SNR / 10"],
        "correct": 0,
        "explanation": "SNR (in dB) = 10 * log10(SNR)."
    },
    {
        "question": "High SNR implies:",
        "options": ["Signal is highly affected by noise", "Signal is less affected by noise", "Data rate is zero", "Bandwidth is zero"],
        "correct": 1,
        "explanation": "High SNR means the signal is less affected by noise."
    },
    {
        "question": "Which formula is used to calculate the maximum bit rate for a Noiseless Channel?",
        "options": ["Shannon Capacity", "Nyquist Formula", "Fourier Transform", "Ohm's Law"],
        "correct": 1,
        "explanation": "For a noiseless channel, we calculate using the Nyquist formula."
    },
    {
        "question": "What is the Nyquist formula for maximum bit rate?",
        "options": ["Bandwidth * log2(L)", "2 * Bandwidth * log2(L)", "Bandwidth * log2(1+SNR)", "2 * Bandwidth * L"],
        "correct": 1,
        "explanation": "Maximum Bit rate = 2 * Bandwidth * log2(L)."
    },
    {
        "question": "Which formula is used for a Noisy Channel?",
        "options": ["Nyquist", "Shannon", "Newton", "Einstein"],
        "correct": 1,
        "explanation": "For a noisy channel, we calculate the Shannon formula."
    },
    {
        "question": "What is the Shannon capacity formula?",
        "options": ["Bandwidth * log2(L)", "2 * Bandwidth * log2(L)", "Bandwidth * log2(1 + SNR)", "Bandwidth * (1 + SNR)"],
        "correct": 2,
        "explanation": "Maximum bit rate or capacity = Bandwidth * log2(1 + SNR)."
    },
    {
        "question": "If the SNR is 0 (Signal highly affected by noise), what is the channel capacity?",
        "options": ["Infinite", "Equal to Bandwidth", "0", "1"],
        "correct": 2,
        "explanation": "Capacity = Bandwidth * log2(1+0) = Bandwidth * log2(1) = 0."
    },

    // --- Switching General ---
    {
        "question": "Why is switching needed in large networks?",
        "options": ["To increase noise", "Because point-to-point connections are not scalable", "To reduce bandwidth", "It is not needed"],
        "correct": 1,
        "explanation": "We cannot extend point-to-point or multipoint methods to very large networks efficiently."
    },
    {
        "question": "Which of the following is NOT a type of switching mentioned?",
        "options": ["Message Switching", "Circuit Switching", "Packet Switching", "Frequency Switching"],
        "correct": 3,
        "explanation": "The types mentioned are Message, Circuit, and Packet switching."
    },

    // --- Circuit Switching ---
    {
        "question": "Circuit switching is handled at which layer?",
        "options": ["Data Link Layer", "Physical Layer", "Network Layer", "Application Layer"],
        "correct": 1,
        "explanation": "Circuit switching needs to be handled at the Physical layer."
    },
    {
        "question": "In Circuit Switching, resources are reserved during which phase?",
        "options": ["Setup phase", "Data transfer phase", "Teardown phase", "They are never reserved"],
        "correct": 0,
        "explanation": "Resources get reserved during the set-up phase and fixed for the entire duration."
    },
    {
        "question": "What are the three phases of communication in Circuit Switching?",
        "options": ["Start, Run, Stop", "Setup, Transfer, Teardown", "Request, Grant, Release", "Connect, Send, Disconnect"],
        "correct": 1,
        "explanation": "The three phases are Setup phase, Data transfer phase, and Teardown phase."
    },
    {
        "question": "Is there a danger of congestion once a path is established in Circuit Switching?",
        "options": ["Yes, high danger", "No", "Only during teardown", "Depends on the data"],
        "correct": 1,
        "explanation": "When the path has established, there is no danger of congestion (resources are dedicated)."
    },
    {
        "question": "Traditional telephone networks use which type of switching?",
        "options": ["Packet Switching", "Message Switching", "Circuit Switching", "Datagram Switching"],
        "correct": 2,
        "explanation": "Switching at the traditional telephone network uses circuit switching."
    },

    // --- Packet Switching (Datagram) ---
    {
        "question": "In Packet Switching, how are resources allocated?",
        "options": ["Reserved in advance", "Allocated on demand", "Allocated permanently", "Allocated by the receiver"],
        "correct": 1,
        "explanation": "There is no resource reservation; the resource is allocated on demand."
    },
    {
        "question": "Allocation of resources in Packet Switching is typically done on what basis?",
        "options": ["Priority", "LIFO", "FCFS (First Come First Serve)", "Random"],
        "correct": 2,
        "explanation": "The allocation of resources is done on FCFS basis."
    },
    {
        "question": "In a Datagram network, packets are treated:",
        "options": ["As a stream", "Independently of each other", "As a single file", "Synchronously"],
        "correct": 1,
        "explanation": "In a datagram network, each packet has no relation to the other packet (treated independently)."
    },
    {
        "question": "Datagram switching is normally done at which layer?",
        "options": ["Physical", "Data Link", "Network", "Transport"],
        "correct": 2,
        "explanation": "It is normally done at the network layer."
    },
    {
        "question": "Do packets in a Datagram network always follow the same path?",
        "options": ["Yes, always", "No, they may follow different paths", "Only if they are small", "Only if they are large"],
        "correct": 1,
        "explanation": "Packets may reach out of order and follow different paths."
    },
    {
        "question": "Can out-of-order delivery occur in a Datagram network?",
        "options": ["Yes", "No", "Only in LANs", "Never"],
        "correct": 0,
        "explanation": "Packets may reach out of order as shown in the diagram in the text."
    },
    {
        "question": "Switching on the Internet is done using which approach?",
        "options": ["Circuit switching", "Datagram approach", "Virtual circuit approach", "Message switching"],
        "correct": 1,
        "explanation": "Switching on the internet is done using the datagram approach."
    },
    {
        "question": "Why is Datagram network considered to have better efficiency than Circuit switching?",
        "options": ["It uses more cables", "Resources are reserved", "No wastage of bandwidth, resources allocated on demand", "It is slower"],
        "correct": 2,
        "explanation": "Datagram network is better because there is no wastage of bandwidth; resources are allocated on demand."
    },

    // --- Virtual Circuit Network ---
    {
        "question": "Virtual Circuit Network is an intermediate between:",
        "options": ["LAN and WAN", "Circuit-switched and Datagram networks", "Physical and Data Link layers", "Modem and Multiplexer"],
        "correct": 1,
        "explanation": "A virtual-circuit network is an intermediate between a circuit-switched network and a datagram network."
    },
    {
        "question": "In Virtual Circuit networks, do packets from a single message travel along the same path?",
        "options": ["No", "Yes", "Sometimes", "Randomly"],
        "correct": 1,
        "explanation": "Packets from the single message travel along the same path."
    },
    {
        "question": "Each packet in a Virtual Circuit network contains:",
        "options": ["Destination IP", "MAC Address", "VCI (Virtual Circuit Identifier)", "Sequence Number"],
        "correct": 2,
        "explanation": "Each packet contains a Virtual Circuit Identifier (VCI)."
    },
    {
        "question": "Virtual Circuit networks are normally used in Switched WANs at which layer?",
        "options": ["Physical", "Data Link", "Network", "Transport"],
        "correct": 1,
        "explanation": "Virtual switch networks are used in switched WAN normally at the data link layer."
    },

    // --- Comparisons & Tables ---
    {
        "question": "Which network requires Setup, Transfer, and Teardown phases?",
        "options": ["Circuit Switched and Virtual Circuit", "Datagram only", "Message Switching only", "Ethernet"],
        "correct": 0,
        "explanation": "Both Circuit Switching and Virtual Circuit networks use Setup, Transfer, and Teardown phases."
    },
    {
        "question": "In which network is end-to-end addressing required during the Transfer phase?",
        "options": ["Circuit Switched", "Virtual Circuit", "Datagram", "All of them"],
        "correct": 2,
        "explanation": "According to the table in the text, only Datagram Network requires addressing during the Transfer phase (Circuit/Virtual do not need full addressing per packet after setup)."
    },
    {
        "question": "Which switching technique allows for resource reservation (Bandwidth/CPU)?",
        "options": ["Datagram", "Virtual Circuit and Circuit Switching", "Datagram and Message", "None"],
        "correct": 1,
        "explanation": "Circuit Switching and Virtual Circuit (connection-oriented) allow resource reservation."
    },
    {
        "question": "Which switching technique is 'Connectionless'?",
        "options": ["Circuit Switching", "Virtual Circuit", "Datagram", "Telephone Network"],
        "correct": 2,
        "explanation": "Resources are not reserved; hence datagram circuit is connectionless."
    },
    {
        "question": "Which is highly reliable: Virtual Circuit or Datagram?",
        "options": ["Datagram", "Virtual Circuit", "Both are equal", "Neither"],
        "correct": 1,
        "explanation": "The comparison table states Virtual Circuit is highly reliable, while Datagram is not reliable."
    },
    {
        "question": "Which protocol technology uses Virtual Circuits?",
        "options": ["IP", "ATM", "Ethernet", "HTTP"],
        "correct": 1,
        "explanation": "ATM uses Virtual circuits."
    },
    {
        "question": "Which protocol technology uses Datagram packets?",
        "options": ["ATM", "IP networks", "Telephone", "X.25"],
        "correct": 1,
        "explanation": "IP networks use datagram packet."
    },
    {
        "question": "Regarding header overhead, Virtual Circuit uses:",
        "options": ["Global header for all packets", "No headers", "Global header for 1st packet, local header (VCI) for rest", "Full IP header for all"],
        "correct": 2,
        "explanation": "The 1st packet needs a global header, and for the remaining packets, it just needs a local header."
    },

    // --- Problem Solving & Math (Based on Practice Questions) ---
    {
        "question": "A channel has Bandwidth 6000 Hz and uses 2 signal levels. It is noiseless. What is the max bit rate?",
        "options": ["6000 bps", "12000 bps", "24000 bps", "3000 bps"],
        "correct": 1,
        "explanation": "Nyquist: 2 * B * log2(L) = 2 * 6000 * log2(2) = 12000 bps."
    },
    {
        "question": "A TV channel has Bandwidth 4 MHz and uses 8-level digital signals. What is the bit rate?",
        "options": ["12 Mbps", "24 Mbps", "32 Mbps", "8 Mbps"],
        "correct": 1,
        "explanation": "Nyquist: 2 * 4MHz * log2(8). log2(8)=3. So, 2 * 4 * 3 = 24 Mbps."
    },
    {
        "question": "If bandwidth is doubled, what is the effect on data rate (according to Nyquist)?",
        "options": ["Halved", "Unchanged", "Doubled", "Quadrupled"],
        "correct": 2,
        "explanation": "Rate is directly proportional to bandwidth, so it is doubled."
    },
    {
        "question": "Railroad and oil pipes are analogies for which communication type?",
        "options": ["Simplex", "Half Duplex", "Full Duplex", "Multiplex"],
        "correct": 1,
        "explanation": "The text states: 'Half duplex, one at a time'."
    },
    {
        "question": "If the propagation delay is 25ms and setup+teardown bits take 2ms to transmit. For circuit switching with 2 setups + 1 teardown phases, what is the overhead delay?",
        "options": ["27ms", "54ms", "81ms", "108ms"],
        "correct": 3,
        "explanation": "Total delay = 4 * (Tp + Tt). If (Tp+Tt) = 27ms, then 4 * 27 = 108ms."
    },
    
    // --- Previous Year Question (Gate 2004) ---
    {
        "question": "Which one of the following statements is FALSE regarding switching?",
        "options": ["Packet switching leads to better bandwidth utilization than circuit switching", "Packet switching results in less variation in delay than circuit switching", "Packet switching requires more per-packet processing", "Packet switching leads to reordering"],
        "correct": 1,
        "explanation": "False statement: 'Packet switching results in less variation in delay'. Circuit switching has constant delay; packet switching has variable delay (jitter)."
    },

    // --- Chapter Summary Points ---
    {
        "question": "If the link is optical, which signal is used?",
        "options": ["Electrical", "Light", "Radio", "Microwave"],
        "correct": 1,
        "explanation": "If the link is optical, then we use a light signal."
    },
    {
        "question": "If the link is copper, which signal is used?",
        "options": ["Light", "Electrical", "Sound", "Magnetic"],
        "correct": 1,
        "explanation": "If the link is copper, then we use an electrical signal."
    },
    {
        "question": "Bandwidth utilization is achieved using which technique?",
        "options": ["Switching", "Multiplexing", "Routing", "Framing"],
        "correct": 1,
        "explanation": "Bandwidth utilization means using available BW ... and using multiplexing, we can achieve efficiency."
    },
    {
        "question": "Which technique allows simultaneous transmission of multiple signals across a single data link?",
        "options": ["Switching", "Multiplexing", "Encoding", "Decoding"],
        "correct": 1,
        "explanation": "Multiplexing is the set of techniques that allows simultaneous transmission of multiple signals."
    },
    
    // --- Extra filler for completeness based on concepts ---
    {
        "question": "In which mode can a device send or receive but not at the same time?",
        "options": ["Simplex", "Half-Duplex", "Full-Duplex", "Automatic"],
        "correct": 1,
        "explanation": "Half-Duplex allows communication in both directions, but only one way at a time."
    },
    {
        "question": "Which switching method requires a continuous physical link setup between sender and receiver?",
        "options": ["Packet", "Circuit", "Message", "Datagram"],
        "correct": 1,
        "explanation": "Circuit switching requires a dedicated physical path."
    },
    {
        "question": "Which delay is caused by the time needed to put bits on the wire?",
        "options": ["Propagation", "Transmission", "Processing", "Queuing"],
        "correct": 1,
        "explanation": "Transmission delay depends on data size and bandwidth."
    },
    {
        "question": "Which delay depends on the distance and speed of the medium?",
        "options": ["Propagation", "Transmission", "Processing", "Queuing"],
        "correct": 0,
        "explanation": "Propagation delay = Distance / Speed."
    },
    {
        "question": "What does VCI stand for?",
        "options": ["Virtual Control Interface", "Virtual Circuit Identifier", "Video Cable Interface", "Variable Circuit Index"],
        "correct": 1,
        "explanation": "VCI stands for Virtual Circuit Identifier."
    },
    {
        "question": "In a noisy channel, can we increase the data rate infinitely by increasing signal levels?",
        "options": ["Yes", "No, constrained by Shannon limit", "Yes, if bandwidth is infinite", "No, constrained by Nyquist"],
        "correct": 1,
        "explanation": "In a noisy channel, the Shannon capacity formula limits the maximum rate regardless of signal levels."
    },
    {
        "question": "If SNR is improved (doubled), the data rate will:",
        "options": ["Double", "Increase slightly", "Stay same", "Decrease"],
        "correct": 1,
        "explanation": "According to the text Q4: 'The rate will slightly increase' (logarithmic relationship)."
    }
];