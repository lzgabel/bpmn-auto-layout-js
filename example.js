import fs from 'fs/promises';
import layoutProcess from './index.js';

var diagramXML = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_01z5nsv" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.14.0" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.1.0">
  <bpmn:process id="Process_03yw5zr" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>Flow_0lnwvb3</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Activity_002i4sd">
      <bpmn:incoming>Flow_0lnwvb3</bpmn:incoming>
      <bpmn:outgoing>Flow_1w6gs6c</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_0lnwvb3" sourceRef="StartEvent_1" targetRef="Activity_002i4sd" />
    <bpmn:exclusiveGateway id="Gateway_17oiq4m">
      <bpmn:incoming>Flow_1w6gs6c</bpmn:incoming>
      <bpmn:outgoing>Flow_0nlen86</bpmn:outgoing>
      <bpmn:outgoing>Flow_1j2giwi</bpmn:outgoing>
      <bpmn:outgoing>Flow_0o5yxjh</bpmn:outgoing>
      <bpmn:outgoing>Flow_0beml5w</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_1w6gs6c" sourceRef="Activity_002i4sd" targetRef="Gateway_17oiq4m" />
    <bpmn:task id="Activity_13ph4nn">
      <bpmn:incoming>Flow_0nlen86</bpmn:incoming>
      <bpmn:outgoing>Flow_0s0vv61</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_0nlen86" sourceRef="Gateway_17oiq4m" targetRef="Activity_13ph4nn" />
    <bpmn:task id="Activity_14jtdtx">
      <bpmn:incoming>Flow_1j2giwi</bpmn:incoming>
      <bpmn:outgoing>Flow_16q2g98</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_1j2giwi" sourceRef="Gateway_17oiq4m" targetRef="Activity_14jtdtx" />
    <bpmn:task id="Activity_0qondib">
      <bpmn:incoming>Flow_0o5yxjh</bpmn:incoming>
      <bpmn:outgoing>Flow_06wa7ht</bpmn:outgoing>
      <bpmn:outgoing>Flow_1o5gxgi</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_0o5yxjh" sourceRef="Gateway_17oiq4m" targetRef="Activity_0qondib" />
    <bpmn:exclusiveGateway id="Gateway_1dogszr">
      <bpmn:incoming>Flow_0s0vv61</bpmn:incoming>
      <bpmn:incoming>Flow_16q2g98</bpmn:incoming>
      <bpmn:incoming>Flow_06wa7ht</bpmn:incoming>
      <bpmn:incoming>Flow_1xduvqf</bpmn:incoming>
      <bpmn:incoming>Flow_13zsd07</bpmn:incoming>
      <bpmn:outgoing>Flow_17rvtpf</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_0s0vv61" sourceRef="Activity_13ph4nn" targetRef="Gateway_1dogszr" />
    <bpmn:sequenceFlow id="Flow_16q2g98" sourceRef="Activity_14jtdtx" targetRef="Gateway_1dogszr" />
    <bpmn:sequenceFlow id="Flow_06wa7ht" sourceRef="Activity_0qondib" targetRef="Gateway_1dogszr" />
    <bpmn:endEvent id="Event_0pzdrp9">
      <bpmn:incoming>Flow_17rvtpf</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_17rvtpf" sourceRef="Gateway_1dogszr" targetRef="Event_0pzdrp9" />
    <bpmn:task id="Activity_0nm4pyf">
      <bpmn:incoming>Flow_0beml5w</bpmn:incoming>
      <bpmn:outgoing>Flow_1xduvqf</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_0beml5w" sourceRef="Gateway_17oiq4m" targetRef="Activity_0nm4pyf" />
    <bpmn:sequenceFlow id="Flow_1xduvqf" sourceRef="Activity_0nm4pyf" targetRef="Gateway_1dogszr" />
    <bpmn:task id="Activity_1f70kbg">
      <bpmn:incoming>Flow_1o5gxgi</bpmn:incoming>
      <bpmn:outgoing>Flow_13zsd07</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_1o5gxgi" sourceRef="Activity_0qondib" targetRef="Activity_1f70kbg" />
    <bpmn:sequenceFlow id="Flow_13zsd07" sourceRef="Activity_1f70kbg" targetRef="Gateway_1dogszr" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_03yw5zr">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="179" y="269" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_002i4sd_di" bpmnElement="Activity_002i4sd">
        <dc:Bounds x="270" y="247" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_17oiq4m_di" bpmnElement="Gateway_17oiq4m" isMarkerVisible="true">
        <dc:Bounds x="425" y="262" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_13ph4nn_di" bpmnElement="Activity_13ph4nn">
        <dc:Bounds x="550" y="220" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1dogszr_di" bpmnElement="Gateway_1dogszr" isMarkerVisible="true">
        <dc:Bounds x="725" y="235" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0pzdrp9_di" bpmnElement="Event_0pzdrp9">
        <dc:Bounds x="852" y="242" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_14jtdtx_di" bpmnElement="Activity_14jtdtx">
        <dc:Bounds x="550" y="380" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0qondib_di" bpmnElement="Activity_0qondib">
        <dc:Bounds x="370" y="560" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0nm4pyf_di" bpmnElement="Activity_0nm4pyf">
        <dc:Bounds x="480" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1f70kbg_di" bpmnElement="Activity_1f70kbg">
        <dc:Bounds x="650" y="640" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0lnwvb3_di" bpmnElement="Flow_0lnwvb3">
        <di:waypoint x="215" y="287" />
        <di:waypoint x="270" y="287" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1w6gs6c_di" bpmnElement="Flow_1w6gs6c">
        <di:waypoint x="370" y="287" />
        <di:waypoint x="425" y="287" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0nlen86_di" bpmnElement="Flow_0nlen86">
        <di:waypoint x="475" y="287" />
        <di:waypoint x="510" y="287" />
        <di:waypoint x="510" y="260" />
        <di:waypoint x="550" y="260" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1j2giwi_di" bpmnElement="Flow_1j2giwi">
        <di:waypoint x="450" y="312" />
        <di:waypoint x="450" y="420" />
        <di:waypoint x="550" y="420" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0o5yxjh_di" bpmnElement="Flow_0o5yxjh">
        <di:waypoint x="450" y="312" />
        <di:waypoint x="450" y="436" />
        <di:waypoint x="420" y="436" />
        <di:waypoint x="420" y="560" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0s0vv61_di" bpmnElement="Flow_0s0vv61">
        <di:waypoint x="650" y="260" />
        <di:waypoint x="725" y="260" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_16q2g98_di" bpmnElement="Flow_16q2g98">
        <di:waypoint x="623" y="380" />
        <di:waypoint x="670" y="300" />
        <di:waypoint x="733" y="268" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_06wa7ht_di" bpmnElement="Flow_06wa7ht">
        <di:waypoint x="470" y="572" />
        <di:waypoint x="690" y="450" />
        <di:waypoint x="744" y="279" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_17rvtpf_di" bpmnElement="Flow_17rvtpf">
        <di:waypoint x="775" y="260" />
        <di:waypoint x="852" y="260" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0beml5w_di" bpmnElement="Flow_0beml5w">
        <di:waypoint x="450" y="262" />
        <di:waypoint x="450" y="120" />
        <di:waypoint x="480" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1xduvqf_di" bpmnElement="Flow_1xduvqf">
        <di:waypoint x="580" y="120" />
        <di:waypoint x="750" y="120" />
        <di:waypoint x="750" y="235" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1o5gxgi_di" bpmnElement="Flow_1o5gxgi">
        <di:waypoint x="470" y="600" />
        <di:waypoint x="560" y="600" />
        <di:waypoint x="560" y="680" />
        <di:waypoint x="650" y="680" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_13zsd07_di" bpmnElement="Flow_13zsd07">
        <di:waypoint x="700" y="640" />
        <di:waypoint x="700" y="463" />
        <di:waypoint x="750" y="463" />
        <di:waypoint x="750" y="285" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>

`;


(async () => {

  var layoutedDiagramXML = await layoutProcess(diagramXML);

  // print diagram XML
  console.log(layoutedDiagramXML);

  // or write to file
  await fs.writeFile('./layouted.bpmn', layoutedDiagramXML);
})();
