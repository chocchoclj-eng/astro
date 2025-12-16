// /app/preview/page.tsx (最终修复版)
"use client";

import ReportShell from '@/components/ReportShell';
// 假设您在 /lib 文件夹中有骨架数据，如果没有，请手动创建它
// 如果没有 initialReportData，请删除这一行，并使用下面的 skeletonData 替代
// import { initialReportData } from '@/lib/initial-report-data'; 

// 使用最小化的骨架数据，确保 ReportShell 组件不报错
const skeletonData = { 
    summary: "这是预览模式下的骨架报告。请提交数据生成正式报告。", 
    modules: [], 
    deep: {}, 
    keyConfig: {},
}; 

export default function Page() {
    return (
        <ReportShell
            summary={skeletonData.summary}
            modules={skeletonData.modules}
            deep={skeletonData.deep}
            setMode={() => {}} // 传递一个空函数
            keyConfig={skeletonData.keyConfig}
            loading={false}
            contentAvailable={true}
        />
    );
}